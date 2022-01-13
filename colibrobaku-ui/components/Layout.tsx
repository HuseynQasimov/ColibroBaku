/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { AppBar, Button, Container, Link, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'
import { StoreContext } from '../utils/StoreContext'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import Cookies from 'js-cookie'
import { useLogoutLazyQuery } from '../graphql/generated/graphql'
import { useRouter } from 'next/router'

export default function Layout ({ title, description, children }) {
  const router = useRouter()
  const { value, setValue, isAdmin, setIsAdmin } = useContext(StoreContext)

  const [logout, { data, loading, error }] = useLogoutLazyQuery()

  const token = Cookies.get('token')

  if (token) {
    const decoded: JwtPayload = jwtDecode(token)

    const firtsname = Object.values(decoded)[1]
    setValue(firtsname)

    const admin = Object.values(decoded)[2]
    setIsAdmin(admin)
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const loginMenuClickHandler = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const loginMenuCloseHandler = () => {
    setAnchorEl(null)
  }

  const logoutClickHandler = async () => {
    try {
      setAnchorEl(null)

      await logout()

      console.log(data)
      console.log(loading)
      console.log(error)

      router.push('/user/login')
    } catch (error) {
      alert('Something went wrong')
    }
  }

  const menuAdminClickHandler = async () => {
    try {
      router.push('/admin/dashboard')
    } catch (error) {
      alert('Something went wrong')
    }
  }

  const classes = useStyles()
  return (
  <div>
    <Head>
      <title>{title ? `${title} - ColibroBaku` : 'ColibroBaku'}</title>
      {description && <meta name="description" content={description}></meta>}
    </Head>
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <NextLink href="/" passHref>
          <Button>
            <Typography className={classes.brand}>colibrobaku</Typography>
          </Button>
        </NextLink>
        <div className={classes.grow}></div>
        <div>
          {value
            ? (
            <NextLink href="/user/orders" passHref>
                <Button className={classes.navbarButton}>
                  <Link>Orders</Link>
                </Button>
            </NextLink>
              )
            : ('')}
          {value
            ? (
          <><Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={loginMenuClickHandler}
          className={classes.navbarButton}>
            {value}
          </Button>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={loginMenuCloseHandler}
        >
          {isAdmin
            ? (
            <>
              <MenuItem onClick={menuAdminClickHandler}>Admin</MenuItem>
              <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
              <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
            </>
              )
            : (
            <>
              <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
              <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
            </>
              )}

        </Menu>
        </>)
            : (<NextLink href="/user/login" passHref>
              <Link>Login</Link>
            </NextLink>
              )}
        </div>
      </Toolbar>
    </AppBar>
    <Container className={classes.main}>
      {children}
    </Container>
    <footer className={classes.footer}>
      <Typography>All rights reserved. ColibroBaku.</Typography>
    </footer>
  </div>
  )
}
