import { Button, Link, List, ListItem, TextField, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useStyles from '../../utils/styles'
import NextLink from 'next/link'
import { useSignUpMutation } from '../../graphql/generated/graphql'


export default function Register() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()
  const router = useRouter()
  
  const [register]= useSignUpMutation({
    variables: {
      firstname,
      lastname,
      email,
      phone,
      password
    }
  })

  const submitHandler = async (e:any) => {
    e.preventDefault()
    
    try {
      const {data} = await register()

      if (data?.signUp.errorMessage) {
        console.log(data?.signUp.errorMessage)
        alert(data?.signUp.errorMessage)
      }
      else if (data?.signUp.userData) {
        console.log(data?.signUp.userData)
        router.push("/user/login")
      }
    } catch (error: any) {
      alert(error.message)
      console.log(error.message)
    }
    
  }
  return (
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography component="h2" variant="h2">
          Register
        </Typography>
        <List>
          <ListItem>
            <TextField variant="outlined" fullWidth id="firstname" label="Firstname" inputProps={{type: 'text'}}
            onChange={e => setFirstname(e.target.value)}></TextField>
          </ListItem>

          <ListItem>
            <TextField variant="outlined" fullWidth id="lastname" label="Lastname" inputProps={{type: 'text'}}
            onChange={e => setLastname(e.target.value)}></TextField>
          </ListItem>

          <ListItem>
            <TextField variant="outlined" fullWidth id="phone" label="Phone" inputProps={{type: 'phone'}}
            onChange={e => setPhone(e.target.value)}></TextField>
          </ListItem>

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
              Register
            </Button>
          </ListItem>

          <ListItem>
            Already have an account? &nbsp;
            <NextLink href="/user/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    )
}
