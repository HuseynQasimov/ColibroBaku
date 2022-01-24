import React from 'react'
import {
  Button, Card, CssBaseline, FormControl, Grid, InputLabel, List,
  ListItem, ListItemText, MenuItem, Select, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import useStyles from '../../utils/styles'
import { useGetAllOrdersQuery, useRemoveOrderByIdLazyQuery, useUpdateOrderMutation } from '../../graphql/generated/graphql'
import { useSnackbar } from 'notistack'
import swal from 'sweetalert'
import { Alert } from '@mui/material'

export default function Order () {
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const { data, loading, error, refetch } = useGetAllOrdersQuery()
  const [removeOrder] = useRemoveOrderByIdLazyQuery()
  const [updateOrder] = useUpdateOrderMutation()

  if (loading) {
    return <p>Loading...</p>
  }

  const orders = data?.getAllOrders

  const handleChange = async (e: any) => {
    console.log('Clicked: ', e.target)
    // const status = e.target.value
    // const resp = await updateOrder({
    //   variables: { id, status }, onCompleted: refetch
    // })

    // if (!resp.data?.updateOrder) {
    //   console.log('Something went wrong')
    // }
  }

  const setStatus = async (id: string, status: number) => {
    try {
      const resp = await updateOrder({
        variables: { id, status }, onCompleted: refetch
      })

      if (!resp.data?.updateOrder) {
        console.log('Something went wrong')
        swal({
          title: 'Something went wrong',
          icon: 'error',
          dangerMode: true
        })
      }
    } catch (error) {
      console.log(error)
      swal({
        title: 'Cannot change a status!',
        icon: 'error',
        dangerMode: true
      })
    }
  }

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
    <Grid item md={2} xs={12}>
          <Card className={classes.section}>
            <List>
              <NextLink href="/admin/dashboard" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="Admin Dashboard"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/orders" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Orders"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/products" passHref>
                <ListItem button component="a">
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
      <div >
      <ListItem>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow >
                          <TableCell>ORDERED AT</TableCell>
                          <TableCell>ADDITIONS</TableCell>
                          <TableCell>PRODUCTS</TableCell>
                          <TableCell>CLIENT</TableCell>
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
                            <TableCell>{order.user.firstname} {order.user.lastname}<br/>
                            ({order.user.phone})</TableCell>
                            <TableCell>{order.totalPrice} AZN</TableCell>
                            <Box sx={{ minWidth: 40, maxWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"/>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={order.status}
                                label="Status"
                                onChange={handleChange}
                              >
                                <MenuItem value={0} onClick={() => setStatus(order.id, 0)}>Waiting</MenuItem>
                                <MenuItem value={1} onClick={() => setStatus(order.id, 1)}>InProgress</MenuItem>
                                <MenuItem value={2} onClick={() => setStatus(order.id, 2)}>Completed</MenuItem>
                                <MenuItem value={3} onClick={() => setStatus(order.id, 3)}>Delivered</MenuItem>
                              </Select>
                            </FormControl>
                            </Box>
                            {/* <TableCell>{order.status}</TableCell> */}
                            <TableCell>
                              <Button size="small" variant="contained"
                                onClick={() => deleteHandler(order.id)}>
                                Delete
                              </Button>
                            </TableCell>
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
