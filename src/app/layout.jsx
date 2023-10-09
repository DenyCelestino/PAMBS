import { ContextProvider } from '@/contexts/Context'
import './globals.css'

export const metadata = {
  title: 'PAMBS',
  description: 'Demo user interface'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
