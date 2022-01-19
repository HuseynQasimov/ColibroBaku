import React, { useState } from 'react'
import { Button, Card, CircularProgress, Grid, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core'
import Layout from '../../../components/Layout'
import NextLink from 'next/link'
import useStyles from '../../../utils/styles'
import { Controller, useForm } from 'react-hook-form'
import { useAddProductMutation } from '../../../graphql/generated/graphql'
import axios from 'axios'
import swal from 'sweetalert'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'

export default function AddProduct () {
  const { handleSubmit, control, formState: { errors } } = useForm()
  const classes = useStyles()
  const router = useRouter()

  const [selectedFile, setSelectedFile] = useState()

  const [addProduct, { loading }] = useAddProductMutation({
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

  // Upload file handler
  const uploadFile = (e) => {
    setSelectedFile(e.target.files[0])
  }

  // Confirm form inputs
  const submitHandler = async ({ model, price, title, description, productCode }) => {
    const formData = new FormData()
    formData.append('file', selectedFile)

    console.log(formData)

    try {
      const res = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      const { url } = res.data

      if (url) {
        const req = {
          model,
          price: parseInt(price),
          title,
          imageUrl: url,
          description,
          productCode
        }
        const resp = await addProduct({ variables: req })
        if (resp.data?.addProduct.errorMessage) {
          swal({
            text: resp.data?.addProduct.errorMessage,
            icon: 'error',
            dangerMode: true
          })
        } else if (resp.data?.addProduct.products) {
          swal({
            text: 'Product added successfully!',
            icon: 'success',
            dangerMode: true
          }).then(() => {
            router.push('/admin/products')
          })
        }
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
    <Layout title={'Add Product'}>
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
                  Add Product
                </Typography>
              </ListItem>

              <ListItem>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className={classes.productForm}
                >
                  <List>
                    <ListItem>
                      <Controller
                        name="model"
                        control={control}
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
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
                        Confirm
                      </Button>
                      {loading ? <CircularProgress /> : ''}
                    </ListItem>
                  </List>
                </form>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
