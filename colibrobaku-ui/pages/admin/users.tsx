import React, { useContext } from 'react'
import {
  Button, Card, Container, Grid, List, ListItem,
  ListItemText, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography
} from '@material-ui/core'
import NextLink from 'next/link'
import Layout from '../../components/Layout'
import { useGetAllUsersQuery } from '../../graphql/generated/graphql'
import Link from 'next/link'
import useStyles from '../../utils/styles'
import { StoreContext } from '../../utils/StoreContext'

export default function Users () {
  const classes = useStyles()
  const { isAdmin } = useContext(StoreContext)
  const { data, loading, error } = useGetAllUsersQuery()

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

  if (loading) {
    return (<h3>Loading...</h3>)
  } else if (!data?.getAllUsers) {
    return (
    <Container className={classes.errorHeader}>
      <Typography component="h3" variant="h3">
        Users page is empty
      </Typography>
    </Container>)
  }

  const users = data.getAllUsers

  return (
    <Layout title="Users">
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
        <Grid item md={10} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Typography component="h2" variant="h2">
                      Users
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Firstname</TableCell>
                          <TableCell>Lastname</TableCell>
                          <TableCell>Phone</TableCell>
                          <TableCell>Email</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.email}>
                            <TableCell>{user.firstname}</TableCell>
                            <TableCell>{user.lastname}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.email}</TableCell>
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
