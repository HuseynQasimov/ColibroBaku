import { Button, Link, List, ListItem, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from '../../utils/styles'
import NextLink from 'next/link'
import { useLoginMutation } from '../../graphql/generated/graphql'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export default function  Login() {
  const classes = useStyles()
  const router = useRouter()

  const token = Cookies.get("token")
  
  if (token) {
    router.push("/")
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login]= useLoginMutation({
    variables: {
      email,
      password
    }
  })

  const submitHandler = async (e:any) => {
    e.preventDefault()
    
    const {data} = await login()

    if (data?.login.errorMessage) {
      alert(data?.login.errorMessage)
    }

    if (data?.login.userData) {
      router.push("/")
    }
  }

  return (
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography component="h2" variant="h2">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField variant="outlined" fullWidth id="email" label="Email" inputProps={{type: 'email'}}
            onChange={e => setEmail(e.target.value)}></TextField>
          </ListItem>

          <ListItem>
            <TextField variant="outlined" fullWidth id="password" label="Password" inputProps={{type: 'password'}}
            onChange={e => setPassword(e.target.value)}></TextField>
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit"  color="primary">
              Login
            </Button>
          </ListItem>

          <ListItem>
            Don't have an account? &nbsp;
            <NextLink href="/user/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    )
}
