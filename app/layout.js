import { roboto } from './fonts'

import styles from '../app/styles/application.scss'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Meriton Aliu",
  description: "My personal webpage about me :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta name="google-site-verification" content="j-TyeffZf3yqsbE82RtzWnd4vVN_tFMr9umYFYtM7H0" />
      <body className={roboto.className}>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
