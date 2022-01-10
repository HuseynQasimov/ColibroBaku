import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <StoreContext.Provider value={{ value, setValue }}>
          <Component {...pageProps}/>
        </StoreContext.Provider>
      </SnackbarProvider>
    </ApolloProvider>
  )
}

export default App
