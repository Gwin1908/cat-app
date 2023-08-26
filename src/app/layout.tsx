import './globals.css'
import type { Metadata } from 'next'
import NavSidebar from '@/Components/NavSidebar/NavSidebar';


export const metadata: Metadata = {
  title: 'Cat App',
  description: 'Testing project for MacPaw Bootcamp 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavSidebar />
        <main className='main'>{children}</main>
      </body>
    </html>
  );
}
