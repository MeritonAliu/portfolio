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
      <body className={roboto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
