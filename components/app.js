import React from 'react'
import MDXContent from '../pages/index.mdx'
import Nav from './navigation'
import iconLibrary from '../utils/iconLibrary'
import Head from 'next/head'
import { globalStyle, theme } from '../utils/theme.config'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const AppLayout = props => {
  iconLibrary()
  return(
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle}/>
      <Head>
        <title>Evan Morrison TazWorks Portfolio</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
        <link href="/TazWorks-Logo-30-color.png" rel="favicon"/>
      </Head>
      <div css={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div css={{flex: 1, padding: 8, maxWidth: 1200, hr: {borderColor: "#6DB56F"}, a: {color: "#D58"}}}>
          <MDXContent/>
          <Nav>
            {props.children}
          </Nav>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default AppLayout
