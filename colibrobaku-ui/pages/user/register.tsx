import { Button, Link, List, ListItem, TextField, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useStyles from '../../utils/styles'
import NextLink from 'next/link'
import { useSignUpMutation } from '../../graphql/generated/graphql'
import { Controller, useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input'

export default function Register () {
  const { handleSubmit, control, formState: { errors } } = useForm()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()
  const router = useRouter()

  const [register] = useSignUpMutation({
    variables: {
      firstname,
      lastname,
      email,
      phone,
      password
    }
  })

  const submitHandler = async ({ firstname, lastname, email, phone, password }) => {
    closeSnackbar()

    setFirstname(firstname)
    setLastname(lastname)
    setEmail(email)
    setPhone(phone)
    setPassword(password)

    try {
      const { data } = await register()

      if (data?.signUp.errorMessage) {
        console.log(data?.signUp.errorMessage)
        enqueueSnackbar(data?.signUp.errorMessage, { variant: 'error' })
      } else if (data?.signUp.userData) {
        console.log(data?.signUp.userData)
        router.push('/user/login')
      }
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
      console.log(error.message)
    }
  }
  return (
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component="h2" variant="h2">
          Register
        </Typography>
        <List>
          <ListItem>
          <Controller
              name="firstname"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-zA-Z]{3,14}$/
              }}
              render={({ field }) => (
                <TextField variant="outlined" fullWidth id="firstname" label="Firstname" inputProps={{ type: 'text' }}
                  error={Boolean(errors.firstname)}
                  helperText={errors.firstname
                    ? errors.firstname.type === 'pattern'
                      ? 'Firstname is not valid'
                      : 'Firstname is required'
                    : ''}
                  {...field}
                  >
                </TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
          <Controller
              name="lastname"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-zA-Z]{3,14}$/
              }}
              render={({ field }) => (
                <TextField variant="outlined" fullWidth id="lastname" label="Lastname" inputProps={{ type: 'text' }}
                  error={Boolean(errors.lastname)}
                  helperText={errors.lastname
                    ? errors.lastname.type === 'pattern'
                      ? 'Lastname is not valid'
                      : 'Lastname is required'
                    : ''}
                  {...field}
                  >
                </TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
          <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[0-9]{10,10}$/
              }}
              render={({ field }) => (
                <TextField variant="outlined" fullWidth id="phone" label="Phone" inputProps={{ type: 'text' }}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone
                    ? errors.phone.type === 'pattern'
                      ? 'Example: 0XX XXX XX XX'
                      : 'Phone is required'
                    : ''}
                  {...field}
                  >
                </TextField>
              )}
            ></Controller>
          </ListItem>

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
                  helperText={errors.password ? errors.password.type === 'minLength' ? 'Password can be more than 5 character' : 'Password is required' : ''}
                  {...field}
                  >
                </TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" color="primary">
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
