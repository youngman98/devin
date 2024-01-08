import type { Metadata } from 'next'
import './globals.css'
import Darkmode from './components/darkmode/darkmode'
import TopMoveBtn from './components/topMoveBtn'
import Header from './(always)/header'
import { Providers } from 'lib/providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <Providers>
      <body className="bg-theme dark:bg-background7">
        <div className="flex w-full min-h-screen justify-center font-Pretendard">
          <div className="Main-container">
          <header>
            <Header/>
          </header>
          <main>
            {children}
          </main>
          </div>
        </div>
        <TopMoveBtn/>
        <Darkmode/>
      </body>
      </Providers>
    </html>
  )
}
