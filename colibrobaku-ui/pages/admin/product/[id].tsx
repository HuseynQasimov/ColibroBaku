import React, { useState } from 'react'
import { Button, Card, CircularProgress, Grid, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core'
import Layout from '../../../components/Layout'
import NextLink from 'next/link'
import useStyles from '../../../utils/styles'
import { Controller, useForm } from 'react-hook-form'
import { useGetProductByIdQuery, useUpdateProductMutation } from '../../../graphql/generated/graphql'
import axios from 'axios'
import swal from 'sweetalert'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'

export default function UpdateProduct () {
  const router = useRouter()
  const classes = useStyles()

  const { handleSubmit, control, formState: { errors } } = useForm()

  const id = router.query.id?.toString()!

  const { data, loading: loa, error } = useGetProductByIdQuery({
    variables: { id }
  })

  const product = data?.getProductById?.products

  const [selectedFile, setSelectedFile] = useState()

  const [updateProduct, { loading }] = useUpdateProductMutation({
    refetchQueries: [{
      query: gql`
      query GetProducts{
        getAllProducts{
          errorMessage
          products{
          id,
          title,
          price,
          model,
          productCode,
          description,
          imageUrl
        }
      }
    }`
    }]
  })

  if (loa) {
    return (<h3>Loading...</h3>)
  }

  if (!product) {
    swal({
      title: 'Something went wrong',
      text: 'Go to products page',
      icon: 'error',
      dangerMode: true
    }).then(() => (
      router.push('/admin/products')
    ))
  }
  const defaultFile = product[0].imageUrl

  // setSelectedFile(product[0].imageUrl)
  // console.log(product)

  // Upload file handler
  const uploadFile = (e) => {
    setSelectedFile(e.target.files[0])
  }

  // Confirm form inputs
  const submitHandler = async ({ model, price, title, description, productCode }) => {
    try {
      let fileUrl = defaultFile

      if (selectedFile) {
        const formData = new FormData()
        formData.append('file', selectedFile)

        const res = await axios.post('http://localhost:8000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        const { url } = res.data
        fileUrl = url
      }

      const req = {
        id,
        model,
        price: parseInt(price),
        title,
        imageUrl: fileUrl,
        description,
        productCode
      }
      const resp = await updateProduct({ variables: req })
      if (resp.data?.updateProduct.errorMessage) {
        swal({
          text: resp.data?.updateProduct.errorMessage,
          icon: 'error',
          dangerMode: true
        })
      } else if (resp.data?.updateProduct.products) {
        swal({
          text: 'Product updated!',
          icon: 'success',
          dangerMode: true
        }).then(() => {
          router.push('/admin/products')
        })
      }
    } catch (error: any) {
      if (error.message === 'Request failed with status code 400') {
        swal({
          text: 'No image uploaded',
          icon: 'error',
          dangerMode: true
        }).then()
      } else if (error.message === 'Request failed with status code 401') {
        swal({
          text: 'File should be an image format (jpg, jpeg, png)',
          icon: 'error',
          dangerMode: true
        }).then()
      } else {
        swal({
          text: error.message,
          icon: 'error',
          dangerMode: true
        }).then()
      }
    }
  }

  return (
    <Layout title={'Update Product'}>
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <NextLink href="/admin/dashboard" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Admin Dashboard"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/orders" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Orders"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/products" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="Products"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/users" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Users"></ListItemText>
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h3" variant="h3">
                  Update Product
                </Typography>
              </ListItem>

              <ListItem>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className={classes.productForm}
                >
                  {product?.map((item) => (
                  <>
                  <List>
                    <ListItem>
                      <Controller
                        name="model"
                        control={control}
                        defaultValue={item.model}
                        rules={{
                          required: true
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="model"
                            label="Model"
                            error={Boolean(errors.model)}
                            helperText={errors.name ? 'Model is required' : ''}
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>

                    <ListItem>
                      <Controller
                        name="price"
                        control={control}
                        defaultValue={item.price}
                        rules={{
                          required: true,
                          pattern: /^[0-9]{1,}$/
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="price"
                            label="Price"
                            error={Boolean(errors.price)}
                            helperText={errors.price
                              ? errors.price.type === 'pattern'
                                ? 'Price should be number value'
                                : 'Price is required'
                              : ''}
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>

                    <ListItem>
                      <Button variant="contained" component="label">
                        Upload File
                        <input type="file" onChange={uploadFile} hidden />
                      </Button>
                    </ListItem>

                    <ListItem>
                      <Controller
                        name="title"
                        control={control}
                        defaultValue={item.title}
                        rules={{
                          required: true
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="title"
                            label="Title"
                            error={Boolean(errors.category)}
                            helperText={
                              errors.category ? 'Title is required' : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>

                    <ListItem>
                      <Controller
                        name="productCode"
                        control={control}
                        defaultValue={item.productCode}
                        rules={{
                          required: true
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="productCode"
                            label="ProductCode"
                            error={Boolean(errors.productCode)}
                            helperText={errors.productCode ? 'Product Code is required' : ''}
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>

                    <ListItem>
                      <Controller
                        name="description"
                        control={control}
                        defaultValue={item.description}
                        rules={{
                          required: true
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            id="description"
                            label="Description"
                            error={Boolean(errors.description)}
                            helperText={
                              errors.description
                                ? 'Description is required'
                                : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>

                    <ListItem>
                      <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        color="primary"
                      >
                        Update
                      </Button>
                      {loading ? <CircularProgress /> : ''}
                    </ListItem>

                  </List>
                  </>
                  ))}
                </form>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
