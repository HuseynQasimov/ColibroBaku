import React, { useContext } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CssBaseline, Grid, ListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { StoreContext } from '../../utils/StoreContext'
import useStyles from '../../utils/styles'
import { useGetUserOrdersQuery, useRemoveOrderByIdLazyQuery } from '../../graphql/generated/graphql'
import Cookies from 'js-cookie'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { useSnackbar } from 'notistack'
import swal from 'sweetalert'

export default function Order () {
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const token = Cookies.get('token')

  // const { userId } = useContext(StoreContext)

  // if (!token) {
  //   router.push('/user/login')
  // }

  let userId: string = ''
  if (token) {
    const decoded: JwtPayload = jwtDecode(token)

    userId = Object.values(decoded)[0]
  }

  const { data, loading, error, refetch } = useGetUserOrdersQuery({
    variables: { id: userId }
  })

  const [removeOrder] = useRemoveOrderByIdLazyQuery()

  if (loading) {
    return <p>Loading...</p>
  }

  const orders = data?.getUserOrders

  const clientOrderStatus: String[] = ['Waiting', 'In Progress', 'Completed', 'Delivered']

  const deleteHandler = async (id: string) => {
    closeSnackbar()

    swal({
      title: 'Are you sure?',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
      .then(async (willDelete) => {
        if (willDelete) {
          try {
            const resp = await removeOrder({ variables: { id }, onCompleted: refetch })
            if (!resp) {
              enqueueSnackbar('Something went wrong', { variant: 'error' })
            }
          } catch (err) {
            enqueueSnackbar('Something went wrong', { variant: 'error' })
          }
        }
      })
  }

  return (
    <div className={classes.paperContainer}>
      <CssBaseline/>
    <Layout>
      <div >
      <ListItem>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow >
                          <TableCell>ORDERED AT</TableCell>
                          <TableCell>ADDITIONS</TableCell>
                          <TableCell>PRODUCTS</TableCell>
                          <TableCell>TOTAL PRICE</TableCell>
                          <TableCell>STATUS</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell>{order.createdDate}</TableCell>
                            <TableCell>{order.additions}</TableCell>
                            <TableCell>{order.products.length}</TableCell>
                            <TableCell>{order.totalPrice} AZN</TableCell>
                            <TableCell>{clientOrderStatus[order.status]}</TableCell>
                            {(order.status <= 0)
                              ? (<TableCell>
                               <Button size="small" variant="contained"
                                onClick={() => deleteHandler(order.id)}>
                                Cancel
                              </Button>
                            </TableCell>)
                              : ' '}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              </ListItem>
      </div>
    </Layout>
    </div>
  )
}
