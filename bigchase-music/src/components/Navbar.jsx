import { NavLink } from 'react-router-dom'
import logoPng from '../assets/yrka1.png'
import logoVideo from '../assets/a3e5.mp4'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-widest uppercase pb-1 border-b-2 transition-colors duration-200 ${
      isActive
        ? 'text-yellow-400 border-yellow-400'
        : 'text-gray-200 border-transparent hover:text-yellow-400 hover:border-yellow-400'
    }`

  return (
    <nav
      className="relative overflow-hidden border-b border-yellow-900/40 bg-cover bg-center bg-no-repeat px-4 py-4 sm:px-8"
      style={{ backgroundImage: `url(${logoPng})` }}
    >
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm"></div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <NavLink to="/" className="m-0 p-0 leading-none">
        <video
          src={logoVideo}
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
          className="m-0 h-28 w-auto object-contain p-0 sm:h-40"
          style={{ filter: 'drop-shadow(0 0 18px rgba(180, 120, 40, 0.7)) drop-shadow(0 4px 12px rgba(120, 70, 10, 0.5))' }}
        />
      </NavLink>
        <div className="grid w-full max-w-md grid-cols-4 items-center gap-2 text-center sm:w-auto sm:gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/music" className={linkClass}>Music</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
