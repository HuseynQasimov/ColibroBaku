import React, { useContext } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import { useGetProductsQuery } from '../graphql/generated/graphql'
import { useRouter } from 'next/router'
import { StoreContext } from '../utils/StoreContext'

export default function Home () {
  const router = useRouter()
  const { value, setValue } = useContext(StoreContext)
  const { data, loading, error } = useGetProductsQuery()

  if (error) {
    console.log(error)
  } else if (loading) {
    return <p>Loading...</p>
  }

  if (!data?.getAllProducts?.products) {
    return <p>Loading...</p>
  }

  const productOrderHandler = () => {
    if (!value) {
      router.push('/user/login')
    } else {
      router.push('/user/orders')
    }
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
                  <Button size="small" color="primary" onClick={productOrderHandler}>
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
