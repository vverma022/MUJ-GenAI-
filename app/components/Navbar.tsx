import Link from 'next/link'
import Logo from '../assets/MUJ_Logo.png'

export default function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
          {/* <img src={Logo.src} alt="MUJ Logo" className="w-12 h-12" /> */}
          </Link>
          <div className="hidden lg:block">
          <p className="font-serif text-lg text-black">
            MANIPAL UNIVERSITY JAIPUR
          </p>
        </div>
        </div> 
      </div>
    </nav>
  )
}