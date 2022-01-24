import React, { useContext } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import { useCreateOrderMutation, useGetProductsQuery, useUserIdLazyQuery, useUserIdQuery } from '../graphql/generated/graphql'
import { useRouter } from 'next/router'
import { StoreContext } from '../utils/StoreContext'
import useStyles from '../utils/styles'

export default function Home () {
  const router = useRouter()
  const classes = useStyles()
  const { userId } = useContext(StoreContext)

  const { data, loading, error } = useGetProductsQuery()

  const [createOrder] = useCreateOrderMutation()

  if (error) {
    console.log(error)
  } else if (loading) {
    return <p>Loading...</p>
  }

  if (!data?.getAllProducts?.products) {
    return <p>Loading...</p>
  }

  const products = data.getAllProducts.products

  const productOrderHandler = async (productId: string) => {
    if (!userId) {
      router.push('/user/login')
    }

    const order = await createOrder({
      variables: {
        productId,
        userId
      }
    })

    if (order.errors) {
      console.log('Something went wrong')
      router.push('/')
    } else if (order.data?.createOrder) {
      router.push('/user/orders')
    }
  }

  return (
    <div className={classes.paperContainer}>
      <CssBaseline/>
    <Layout>
      <div >
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.model}>
              <Card>
                <NextLink href={`/product/${product.id}`} passHref>
                <CardActionArea>
                  <CardMedia className={classes.imageSize} component="img" image={product.imageUrl} title={product.title}>

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
                  {/* <Button size="small" color="primary" onClick={() => productOrderHandler(product.id)}>
                    Details
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
    </div>
  )
}
