import React from 'react'
import MDXContent from '../pages/index.mdx'
import iconLibrary from '../utils/iconLIbrary'
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
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <div css={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div css={{flex: 1, maxWidth: 1200}}>
          <MDXContent/>
          {props.children}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default AppLayout
