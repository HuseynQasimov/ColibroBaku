import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import { useGetProductsQuery } from '../graphql/generated/graphql'

export default function Home () {
  const { data, loading, error } = useGetProductsQuery()

  if (error) {
    console.log(error)
  } else if (loading) {
    return <p>Loading...</p>
  }

  if (!data?.getAllProducts?.products) {
    return <p>Loading...</p>
  }
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.getAllProducts.products.map((product) => (
            <Grid item md={4} key={product.model}>
              <Card>
                <NextLink href={`/product/${product.id}`} passHref>
                <CardActionArea>
                  <CardMedia component="img" image={product.image} title={product.title}>

                  </CardMedia>
                  <CardContent>
                    <Typography>
                      {product.model}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>
                    {product.price} AZN
                  </Typography>
                  <Button size="small" color="primary">
                    Order
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
