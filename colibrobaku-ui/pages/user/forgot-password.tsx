import React, { useState } from 'react'
import { Button, List, ListItem, TextField } from '@material-ui/core'
import useStyles from '../../utils/styles'
import { useRouter } from 'next/router'
import { useForgotPasswordMutation } from '../../graphql/generated/graphql'

export default function ForgotPassword () {
  const classes = useStyles()
  const router = useRouter()

  const [email, setEmail] = useState('')

  const [forgotPassword] = useForgotPasswordMutation({
    variables: { email }
  })

  const submitHandler = async (e:any) => {
    e.preventDefault()

    try {
      const { data } = await forgotPassword()
      if (data?.forgotPassword.errorMessage) {
        alert('Something went wrong')
        console.log(data?.forgotPassword.errorMessage)
        router.push('/user/login')
      }
    } catch (error) {
      alert('Something went wrong')
      router.push('/user/login')
      console.log(error)
    }

    router.push('/user/login')
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
    <List>
      <ListItem>
        <TextField variant="outlined" fullWidth id="email" label="Email" inputProps={{ type: 'email' }}
        onChange={e => setEmail(e.target.value)}></TextField>
      </ListItem>

      <ListItem>
        <Button variant="contained" type="submit" color="primary">
          Send email
        </Button>
      </ListItem>

    </List>
  </form>
  )
}
