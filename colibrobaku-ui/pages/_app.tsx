import React, { useEffect, useMemo, useState } from 'react'
import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { StoreContext } from '../utils/StoreContext'
import { SnackbarProvider } from 'notistack'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})

function App ({ Component, pageProps }) {
  const [value, setValue] = useState('')
  const [isAdmin, setIsAdmin] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <StoreContext.Provider value={{ value, setValue, isAdmin, setIsAdmin, userId, setUserId }}>
          <Component {...pageProps}/>
        </StoreContext.Provider>
      </SnackbarProvider>
    </ApolloProvider>
  )
}
// anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

export default App
