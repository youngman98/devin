
import type { Metadata } from 'next'
import { useAppSelector, useAppDispatch } from 'redux/reduxHook'
import './globals.css'
import Darkmode from './components/darkmode'
import TopMoveBtn from './components/topMoveBtn'
import PostEdit from './components/edit'
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
        <div className="Content-container justify-center font-Pretendard">
          <div className="Main-container">
          <Header/>
          
          <Providers>{children}</Providers>
          
          </div>
        </div>
        <TopMoveBtn/>
        <Darkmode/>
      </body>
    </html>
  )
}
