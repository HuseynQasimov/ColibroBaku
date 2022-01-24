import { Button, Link, List, ListItem, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from '../../utils/styles'
import NextLink from 'next/link'
import { useLoginMutation } from '../../graphql/generated/graphql'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Controller, useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'

export default function Login () {
  const { handleSubmit, control, formState: { errors } } = useForm()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const classes = useStyles()
  const router = useRouter()

  const token = Cookies.get('token')

  if (token) {
    router.push('/')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login] = useLoginMutation({
    variables: {
      email,
      password
    }
  })

  const submitHandler = async ({ email, password }) => {
    closeSnackbar()

    setEmail(email)
    setPassword(password)

    try {
      const { data } = await login()

      if (data?.login.errorMessage) {
        enqueueSnackbar(data?.login.errorMessage, { variant: 'error' })
      }

      if (data?.login.userData) {
        console.log(data?.login.userData)
        router.push('/')
      }
    } catch (error) {
      alert('Something went wrong')
    }
  }

  return (
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component="h2" variant="h2">
          Login
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
              }}
              render={({ field }) => (
                <TextField variant="outlined" fullWidth id="email" label="Email" inputProps={{ type: 'text' }}
                  error={Boolean(errors.email)}
                  helperText={errors.email ? errors.email.type === 'pattern' ? 'Email is not valid' : 'Email is required' : ''}
                  {...field}
                  >
                </TextField>
              )}
            ></Controller>

          </ListItem>

          <ListItem>
          <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6
              }}
              render={({ field }) => (
                <TextField variant="outlined" fullWidth id="password" label="Password" inputProps={{ type: 'password' }}
                  error={Boolean(errors.password)}
                  helperText={errors.password ? errors.password.type === 'minLength' ? 'Password should be more than 5 character' : 'Password is required' : ''}
                  {...field}
                  >
                </TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" color="primary">
              Login
            </Button>
          </ListItem>

          <ListItem>
            Don't have an account? &nbsp;
            <NextLink href="/user/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/user/forgot-password" passHref>
              <Link>Forgot password</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
  )
}
