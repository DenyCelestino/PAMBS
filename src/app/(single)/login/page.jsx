import Image from 'next/image'
import MASCOTE from '../../../../public/mascot.png'
import { Key, User2 } from 'lucide-react'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="min-h-2/5 md:min-h-screen w-full md:w-2/4 bg-primary-100 text-xs md:text-base text-center text-zinc-50">
        <div className="wrapper flex-col gap-2 flex items-center justify-center">
          <div className="h-40 w-40 md:h-full md:w-full ">
            <Image
              className="h-full w-full object-cover"
              src={MASCOTE}
            />
          </div>
          <h1 className="font-bold">PAMBS</h1>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sit voluptatum fugiat.
          </p>
        </div>
      </div>

      <div className="min-h-2/5 md:min-h-screen w-full md:w-2/4 mt-10 md:mt-0 text-xs md:text-base flex items-center justify-center">
        <div className="w-full p-4 md:w-9/12 flex flex-col gap-4">
          <div>
            <h1 className="font-bold">
              Sua melhor forma de controlar seu estrato de saude
            </h1>
            <span>Digite suas credencias para acessar</span>
          </div>

          <div className="w-full flex items-center gap-1 bg-zinc-300 p-2 rounded">
            <User2 size={15} />
            <input
              className="bg-transparent p-2 w-full"
              placeholder="digite seu codigo pambs"
            />
          </div>
          <div className="w-full flex items-center gap-1 bg-zinc-300 p-2 rounded">
            <Key size={15} />
            <input
              type="password"
              className="bg-transparent p-2 w-full"
              placeholder="digite sua senha"
            />
          </div>
          <Link
            href={'/home'}
            className="bg-primary-100 p-3 text-zinc-50 rounded text-center"
          >
            Iniciar sessao
          </Link>
        </div>
      </div>
    </div>
  )
}
