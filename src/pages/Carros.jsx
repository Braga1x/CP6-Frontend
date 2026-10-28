import { useState } from 'react'
import Card from '../components/Card'

// monta o link da foto a partir do nome do arquivo na Wikimedia Commons
const foto = (arquivo) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(arquivo)}?width=800`

const carros = [
  {
    id: 1,
    marca: 'BMW',
    modelo: 'M3 Competition',
    ano: 2022,
    categoria: 'Sedã esportivo',
    preco: 1200,
    foto: foto('BMW M3 Competition Berline G80 (51233723653).jpg'),
  },
  {
    id: 2,
    marca: 'Porsche',
    modelo: '911 Carrera',
    ano: 2022,
    categoria: 'Cupê',
    preco: 2500,
    foto: foto('Porsche 911 Carrera coupé (type 992).jpg'),
  },
  {
    id: 3,
    marca: 'Mercedes-Benz',
    modelo: 'C63 AMG Cabriolet',
    ano: 2019,
    categoria: 'Conversível',
    preco: 1500,
    foto: foto('Mercedes-AMG C 63 (A205) IMG 2982.jpg'),
  },
  {
    id: 4,
    marca: 'Audi',
    modelo: 'RS6 Avant',
    ano: 2022,
    categoria: 'Perua esportiva',
    preco: 1400,
    foto: foto('Audi RS 6 Avant C8 Daytona Grey Pearl (1).jpg'),
  },
  {
    id: 5,
    marca: 'Ferrari',
    modelo: 'Roma',
    ano: 2021,
    categoria: 'Cupê GT',
    preco: 4500,
    foto: foto('Red Ferrari Roma.jpg'),
  },
  {
    id: 6,
    marca: 'Lamborghini',
    modelo: 'Huracán',
    ano: 2018,
    categoria: 'Supercarro',
    preco: 5000,
    foto: foto("Lamborghini Huracán - Mondial de l'Automobile de Paris 2018 - 001.jpg"),
  },
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