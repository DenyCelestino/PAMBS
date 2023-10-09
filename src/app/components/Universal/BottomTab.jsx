import Link from 'next/link'
import { routes } from '../../constants/routes'

export default function BottomTab() {
  return (
    <div className="bg-white shadow-sm h-14 p-2 flex md:hidden items-center justify-around fixed bottom-0 left-0 right-0 border-t border-t-zinc-300/100">
      {routes.map((item, index) => (
        <Link key={index} href={item.path}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
