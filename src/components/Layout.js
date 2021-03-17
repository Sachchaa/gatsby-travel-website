import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { GlobalStyle } from './GlobalStyles'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </>

    )
}

export default Layout

