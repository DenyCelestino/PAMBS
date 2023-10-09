import Hero from '@/app/components/Universal/Home/Hero'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const moviments = [
  { name: 'Consulta', amount: '2000', date: '21-09-2013' },
  { name: 'Recarregamento', amount: '1000', date: '21-09-2013' }
]

const card = {
  name: 'Delfim Celestino',
  account: '457323',
  exp: '05/26'
}
export default function Home() {
  return (
    <div>
      <Hero />

      <div className="mt-32 md:mt-14">
        <div className="wrapper  grid grid-cols-1 md:grid-cols-10 gap-2">
          <div className="md:col-span-7 bg-white shadow-sm rounded p-2">
            <div className="flex flex-col gap-4 text-xs md:text-base">
              {moviments.map((item, index) => (
                <div
                  className="flex items-center justify-between border-b border-b-zinc-200/50 p-2"
                  key={index}
                >
                  <h1 className="font-bold">{item.name}</h1>

                  <div className="flex items-center gap-1">
                    <span
                      className={`${
                        item.name == 'Consulta'
                          ? 'text-red-600'
                          : 'text-green-600'
                      }`}
                    >
                      {' '}
                      {item.amount} MT{' '}
                    </span>
                    <span
                      className={`${
                        item.name == 'Consulta'
                          ? 'text-red-600'
                          : 'text-green-600'
                      }`}
                    >
                      {item.name == 'Consulta' ? (
                        <ArrowDownRight size={15} />
                      ) : (
                        <ArrowUpRight size={15} />
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs md:text-base md:col-span-3 bg-white p-2">
            <div className="p-4 rounded-lg bg-blue-600 text-zinc-50">
              <div className="flex item-center justify-between">
                <div className="p-4 rounded bg-zinc-400"></div>

                <span className="font-bold">PAMBS CARD</span>
              </div>

              <div className="flex items-center justify-between mt-24">
                <div className="flex flex-col gap-2">
                  <span> ***** {card.account}</span>
                  <h1 className="font-bold">{card.name}</h1>
                </div>

                <div>
                  <span className="font-bold">{card.exp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
