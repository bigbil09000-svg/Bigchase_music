import { NavLink } from 'react-router-dom'
import logo from '../assets/yrka1.png'
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
      className="relative flex h-36 items-center justify-between overflow-hidden border-b border-yellow-900/40 bg-cover bg-center bg-no-repeat px-10"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <NavLink to="/" className="relative z-10 m-0 p-0 leading-none">
        <video
          src={logoVideo}
          autoPlay
          loop
          muted
          playsInline
          className="m-0 p-0 h-full max-h-32 w-auto object-contain"
          style={{ filter: 'drop-shadow(0 0 18px rgba(180, 120, 40, 0.7)) drop-shadow(0 4px 12px rgba(120, 70, 10, 0.5))' }}
        />
      </NavLink>
      <div className="relative z-10 flex items-center gap-10">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/music" className={linkClass}>Music</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>
    </nav>
  )
}
