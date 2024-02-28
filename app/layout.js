import { roboto } from './fonts'

import styles from '../app/styles/application.scss'
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Meriton Aliu",
  description: "My personal webpage about me :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="j-TyeffZf3yqsbE82RtzWnd4vVN_tFMr9umYFYtM7H0" />
      <body className={roboto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
