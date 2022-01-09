/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {AppBar, Button, Container, Link, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import useStyles from "../utils/styles";
import { StoreContext } from "../utils/userContext";
import jwtDecode, { JwtPayload } from "jwt-decode";
import Cookies from "js-cookie";
import {useLogoutLazyQuery } from "../graphql/generated/graphql";
import { useRouter } from "next/router";

export default function Layout ({title, description, children}) {
  const router = useRouter()
  const {value, setValue} = useContext(StoreContext)

  const [logout, {data, loading, error}] = useLogoutLazyQuery()

  const token = Cookies.get("token")

  if (token) {
    const decoded: JwtPayload = jwtDecode(token)
    const payload = Object.values(decoded)[1]
    setValue(payload)
  }
  
  const [anchorEl, setAnchorEl] = useState(null)
  const loginMenuClickHandler = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const loginMenuCloseHandler = () => {
    setAnchorEl(null)
  }

  const logoutClickHandler = async () => {
    setAnchorEl(null)
    await logout()
    console.log(data)
    console.log(loading)
    console.log(error)
    router.push("/user/login")
  }

  const classes = useStyles();
  return (
  <div>
    <Head>
      <title>{title? `${title} - ColibroBaku`: "ColibroBaku"}</title>
      {description && <meta name="description" content={description}></meta>}
    </Head>
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link>
            <Typography className={classes.brand}>colibrobaku</Typography>
          </Link>
        </NextLink>
        <div className={classes.grow}></div>
        <div>
          <NextLink href="/orders" passHref>
            <Link>Orders</Link>
          </NextLink>
          {value ? (
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
          <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
          <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
        </Menu>
        </>): 
            (<NextLink href="/user/login" passHref>
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

