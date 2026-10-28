import { Link } from 'react-router-dom'

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
          <p className="text-3xl mb-2">🛡️</p>
          <h3 className="font-bold mb-1">Seguro incluso</h3>
          <p className="text-sm text-gray-600">
            Todos os carros possuem seguro completo.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-3xl mb-2">⚡</p>
          <h3 className="font-bold mb-1">Reserva rápida</h3>
          <p className="text-sm text-gray-600">
            Escolha o carro e retire em poucas horas.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-3xl mb-2">🔧</p>
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