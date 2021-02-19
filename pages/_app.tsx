import React, { useState } from 'react'
import { AppProps } from 'next/app'
import SimpleReactLightbox from 'simple-react-lightbox'
import NavBar from '../components/nav-bar'
import '../styles/global.css'
import { Provider } from 'next-auth/client'


export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  return (
    <Provider session={pageProps.session}>
      <NavBar open={open} setOpen={setOpen}>
        <SimpleReactLightbox>
          <Component {...pageProps} open={open} setOpen={setOpen} />
        </SimpleReactLightbox>
      </NavBar>
    </Provider>
  )
}
