
import type { Metadata } from 'next'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import './globals.css'
import Darkmode from './(tool)/darkmode'
import PostEdit from './(tool)/edit'
import Header from './(always)/header'
import Sidebar from './(always)/sidebar'
import Providers from '../redux/provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="Content-container justify-center">
          <div className="Main-container">
          <Header/>
          
          <Providers>{children}</Providers>
          
          </div>
        </div>
        <PostEdit/>
        <Darkmode/>
      </body>
    </html>
  )
}
