import BottomTab from '../components/Universal/BottomTab'
import Header from '../components/Universal/Header'

export default function LayoutUniversal({ children }) {
  return (
    <div>
      <Header />
      <div className="bg-zinc-50 min-h-screen pb-20">{children}</div>
      <BottomTab />
    </div>
  )
}
