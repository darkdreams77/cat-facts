import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { store } from '../store'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export type ThemeValue = 'light' | 'dark'

function MyApp({ Component, pageProps }: AppProps) {
  const prefersDarkTheme = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(prefersDarkTheme)

  useEffect(() => {
    setIsDarkTheme(prefersDarkTheme)
  }, [prefersDarkTheme])

  const darkTheme = useMemo(
    () => ({
      toggleColorMode: () => {
        setIsDarkTheme((prevTheme) => !prevTheme)
      },
    }),
    []
  )

  const theme = useMemo(
    () => createTheme({ palette: { mode: isDarkTheme ? 'dark' : 'light' } }),
    [isDarkTheme]
  )

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Cat fact of the moment</title>
      </Head>

      <Provider store={store}>
        <ColorModeContext.Provider value={darkTheme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Provider>
    </>
  )
}

export default MyApp
