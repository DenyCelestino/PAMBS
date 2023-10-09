import { MoveDownRight, Send, Wallet } from 'lucide-react'

const data = [
  {
    name: 'Saldo disponivel',
    amount: '4500,54',
    icon: <Wallet size={20} />
  },
  {
    name: 'Ultimo debito',
    amount: '1200,21',
    icon: <MoveDownRight color="red" size={20} />
  },
  {
    name: 'Ultima transferencia',
    amount: '2000',
    icon: <Send color="blue" size={20} />
  }
]

export default function Hero() {
  return (
    <div className="bg-primary-100 w-full h-52 md:h-72 flex items-center justify-center rounded-b-lg text-zinc-50  ">
      <div className="wrapper flex flex-col relative ">
        <div className="flex flex-col md:flex-row gap-2 md:0 md:justify-between">
          <div>
            <h1 className="font-bold text-base md:text-lg">
              Bem vindo, Delfim Celestino
            </h1>
            <span className="text-xs md:text-base text-zinc-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.!
            </span>
          </div>
          <div>
            <button className="py-2 px-4 bg-secondary-100 rounded text-xs md:text-base">
              Baixar relatiorio
            </button>
          </div>
        </div>

        {/* list box  */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 absolute left-0 bottom-0 -mb-40 md:-mb-36 text-xs md:text-base">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white  p-2 flex items-center gap-4 shadow-md rounded text-zinc-950 "
            >
              <div className="p-4 bg-blue-100/60 text-secondary-100 rounded">
                {item.icon}
              </div>

              <div className="flex flex-col gap-1">
                <span>{item.name}</span>
                <span className="font-bold">{item.amount} MT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
