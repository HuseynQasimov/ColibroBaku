/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@material-ui/core'
import useStyles from '../../utils/styles'
import Image from 'next/image'
import { useGetProductByIdQuery } from '../../graphql/generated/graphql'

export default function ProductScreen () {
  const classes = useStyles()
  const router = useRouter()
  const id = router.query.id?.toString()!

  const { data, loading, error } = useGetProductByIdQuery({
    variables: { id }
  })

  if (loading) {
    return <p>Loading...</p>
  } else if (!data?.getProductById?.products || data.getProductById.errorMessage) {
    return <h1>Page not found</h1>
  }

  const product = data.getProductById.products[0]

  return (
    <Layout title={product.model} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>back to products</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image src={product.image} alt={product.model} width={140} height={140} layout='responsive'>

          </Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List >
            <ListItem>
              <Typography component={'h1'}>Model: {product.model}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Product Code: {product.productCode}</Typography>
            </ListItem>
            {/* <ListItem>
              <Typography>Price: {product.price} AZN</Typography>
            </ListItem> */}
            <ListItem>
              <Typography>Title: {product.title}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{product.price} AZN</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Order
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
