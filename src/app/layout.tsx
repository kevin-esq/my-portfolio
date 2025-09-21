import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kevin Portfolio',
  description: 'React & .NET Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
