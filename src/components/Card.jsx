function Card({ marca, modelo, ano, preco, cor }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-40 bg-gray-200 flex items-center justify-center text-6xl">
        🚗
      </div>

      <div className="p-4">
        <p className="text-xs uppercase text-gray-500">{marca}</p>
        <h3 className="text-lg font-bold text-gray-900">{modelo}</h3>
        <p className="text-sm text-gray-600">
          {ano} • {cor}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            R$ {preco}
            <span className="text-sm font-normal text-gray-500">/dia</span>
          </span>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition">
            Alugar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card