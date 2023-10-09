import { ArrowRightLeft, LayoutDashboard, Wallet } from 'lucide-react'

export const routes = [
  {
    name: 'Painel',
    path: '/',
    icon: <LayoutDashboard size={30} />
  },
  {
    name: 'Carteira',
    path: '/wallet',
    icon: <Wallet size={30} />
  },
  {
    name: 'Transacao',
    path: '/transaction',
    icon: <ArrowRightLeft size={30} />
  }
]
