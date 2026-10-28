import { useState } from 'react'
import Card from '../components/Card'

const carros = [
  { id: 1, marca: 'BMW', modelo: 'M3 Competition', ano: 2023, cor: 'Preto', preco: 1200 },
  { id: 2, marca: 'Porsche', modelo: '911 Carrera', ano: 2022, cor: 'Cinza', preco: 2500 },
  { id: 3, marca: 'Mercedes-Benz', modelo: 'C63 AMG', ano: 2023, cor: 'Branco', preco: 1500 },
  { id: 4, marca: 'Audi', modelo: 'RS6 Avant', ano: 2022, cor: 'Azul', preco: 1400 },
  { id: 5, marca: 'Ferrari', modelo: 'Roma', ano: 2021, cor: 'Vermelho', preco: 4500 },
  { id: 6, marca: 'Lamborghini', modelo: 'Huracán', ano: 2022, cor: 'Amarelo', preco: 5000 },
]

function Carros() {
  const [busca, setBusca] = useState('')

  const carrosFiltrados = carros.filter((carro) =>
    `${carro.marca} ${carro.modelo}`.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa frota</h2>

      <input
        type="text"
        placeholder="Buscar por marca ou modelo..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full md:w-80 mb-8 px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {carrosFiltrados.length === 0 ? (
        <p className="text-gray-500">Nenhum carro encontrado.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carrosFiltrados.map((carro) => (
            <Card key={carro.id} {...carro} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carros