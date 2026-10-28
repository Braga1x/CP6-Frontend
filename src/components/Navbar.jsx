import { NavLink } from 'react-router-dom'

function Navbar() {
  const estiloLink = ({ isActive }) =>
    isActive
      ? 'text-yellow-400 font-semibold'
      : 'text-white hover:text-yellow-400 transition'

  return (
    <nav className="bg-gray-900 px-6 py-4 flex items-center justify-between">
      <h1 className="text-white text-xl font-bold">
        Prime<span className="text-yellow-400">Motors</span>
      </h1>

      <ul className="flex gap-6">
        <li>
          <NavLink to="/" className={estiloLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/carros" className={estiloLink}>
            Carros
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar