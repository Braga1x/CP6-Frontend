import { Link } from 'react-router-dom'

function Icone({ d }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-10 h-10 mx-auto mb-3 text-yellow-500"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}

const escudo =
  'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
const raio = 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z'
const check = 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'

function Home() {
  return (
    <div>
      <section className="bg-gray-800 text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Dirija o carro dos seus sonhos
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Locação de carros importados com atendimento personalizado,
          seguro incluso e entrega no local que você escolher.
        </p>
        <Link
          to="/carros"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
        >
          Ver carros disponíveis
        </Link>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <Icone d={escudo} />
          <h3 className="font-bold mb-1">Seguro incluso</h3>
          <p className="text-sm text-gray-600">
            Todos os carros possuem seguro completo.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <Icone d={raio} />
          <h3 className="font-bold mb-1">Reserva rápida</h3>
          <p className="text-sm text-gray-600">
            Escolha o carro e retire em poucas horas.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <Icone d={check} />
          <h3 className="font-bold mb-1">Revisão em dia</h3>
          <p className="text-sm text-gray-600">
            Frota sempre revisada e higienizada.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home