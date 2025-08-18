import React from 'react'
import '@/app/globals.css'

export const metadata = {
  title: 'CLT Hub',
  description: 'Baza wiedzy, Basic/Pro i galeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pl'>
      <body>{children}</body>
    </html>
  )
}

