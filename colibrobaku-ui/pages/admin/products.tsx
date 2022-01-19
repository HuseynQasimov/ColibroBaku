import React, { useContext } from 'react'
import {
  Button, Card, Grid, List, ListItem,
  ListItemText, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography
} from '@material-ui/core'
import NextLink from 'next/link'
import Layout from '../../components/Layout'
import useStyles from '../../utils/styles'
import { useDeleteProductMutation, useGetProductsQuery } from '../../graphql/generated/graphql'
import Link from 'next/link'

import swal from 'sweetalert'
import { useSnackbar } from 'notistack'
import { StoreContext } from '../../utils/StoreContext'

export default function Products () {
  const { isAdmin } = useContext(StoreContext)
  const classes = useStyles()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const { data, loading, error, refetch } = useGetProductsQuery()

  const [deleteProduct] = useDeleteProductMutation()

  // if (!isAdmin || isAdmin === false) {
  //   return (
  //     <>
  //     <Container className={classes.errorHeader}>
  //       <Typography component="h3" variant="h3">
  //         404 - page not found
  //       </Typography>
  //     </Container>
  //     </>
  //   )
  // }

  if (!data?.getAllProducts?.products || loading) {
    return (<h3>Loading...</h3>)
  }
  const products = data?.getAllProducts?.products

  const deleteHandler = (id) => {
    closeSnackbar()

    swal({
      title: 'Are you sure?',
      text: 'Product will delete permanently',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
      .then(async (willDelete) => {
        if (willDelete) {
          try {
            const resp = await deleteProduct({ variables: { id }, onCompleted: refetch })
            if (resp === false) {
              enqueueSnackbar('Something went wrong', { variant: 'error' })
            }
          } catch (err) {
            enqueueSnackbar('Something went wrong', { variant: 'error' })
          }
        }
      })
  }

  return (
    <Layout title="Products">
      <Grid container spacing={1}>
        <Grid item md={2} xs={12}>
          <Card className={classes.section}>
            <List>
              <NextLink href="/admin/dashboard" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Admin Dashboard"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/orders" passHref>
                <ListItem button component="b">
                  <ListItemText primary="Orders"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/products" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="Products"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/users" passHref>
                <ListItem button component="b">
                  <ListItemText primary="Users"></ListItemText>
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={10} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Typography component="h2" variant="h2">
                      Products
                    </Typography>
                  </Grid>
                  <Grid align="right" item xs={6}>
                    <NextLink href="/admin/product/add-product" passHref>
                      <Link>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Add New Product
                    </Button>
                    </Link>
                    </NextLink>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow >
                          <TableCell >ID</TableCell>
                          <TableCell>MODEL</TableCell>
                          <TableCell>Product Code</TableCell>
                          <TableCell>PRICE</TableCell>
                          <TableCell>ACTIONS</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {products.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell>
                              <NextLink href={`/product/${product.id}`} passHref>
                                <Link href={''}>{product.id}</Link>
                              </NextLink>
                            </TableCell>
                            <TableCell>{product.model}</TableCell>
                            <TableCell>{product.productCode}</TableCell>
                            <TableCell>{product.price} AZN</TableCell>
                            <TableCell>
                              <NextLink
                                href={`/admin/product/${product.id}`}
                                passHref
                              >
                                <Button size="small" variant="contained">
                                  Update
                                </Button>
                              </NextLink>{' '}
                              <Button size="small" variant="contained"
                                onClick={() => deleteHandler(product.id)}>
                                Remove
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
