import Link from 'next/link'
import { routes } from '../../constants/routes'
import { BellDot, DoorOpen, Rabbit } from 'lucide-react'

export default function Header() {
  return (
    <div className="p-2 h-14 transparent  fixed top-0 left-0 right-0 z-20 bg-primary-100">
      <div className="wrapper flex items-center justify-between text-zinc-50 text-xs md:text-base">
        <div className="flex items-center gap-1">
          <Rabbit size={15} />
          <span className="font-bold">PAMBS</span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {routes.map((item, index) => (
            <Link href={item.path} key={index}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href={'#'}>
            <DoorOpen size={20} />
          </Link>
          <Link href={'#'}>
            <BellDot size={20} />
          </Link>

          <div className=" h-8 w-8 md:h-10 md:w-10 rounded-full">
            <img
              className="h-full w-full rounded-full"
              src="https://github.com/denycelestino.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
