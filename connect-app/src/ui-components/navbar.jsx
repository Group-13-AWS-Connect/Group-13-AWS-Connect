import './navbar.css'
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react'
import bison_logo from '../assets/bison_logo.svg'
import logo_text from '../assets/logo_text.svg'
import logout from '../assets/logout.svg'
import { createContext, useState, useContext } from 'react'

const NavbarContext = createContext()
export function Navbar({children}) {
    const [expanded, setExpanded] = useState(true)
    return (
        <aside className='h-screen'>
            <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
                <div className='p-4 pb-2 flex justify-between items-center'>
                    <img src={bison_logo} className={`overflow-hidden transition all ${expanded ? 'w-32' : 'w-0'}`} alt="dashboard"/>
                    <img src={logo_text } className={`overflow-hidden transition all ${expanded ? 'w-32' : 'w-0'}`} alt="dashboard"/>
                    <button onClick={() => setExpanded(curr => !curr)} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                        {expanded? <ChevronFirst/>: <ChevronLast/>}
                    </button>
                </div>

                <NavbarContext.Provider value={{expanded}}>
                    <ul className='flex-1 px-3'> {children} </ul>
                </NavbarContext.Provider>

                <div className='border-t flex p-3'>
                    <img src={logout} className='w-10 h-10 rounded-md' alt='logout'/>
                    <div className={`flex justify-between items-center overflow-hidden transition all ${expanded ? 'ml-52 ml-3' : 'w-0'}`}>
                        <div>
                            <span className='text-xs text-gray-600'> Logout</span>
                        </div>
                        <MoreVertical size={20}/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export function NavbarItem({icon, text, active, alert}) {
    const {expanded} = useContext(NavbarContext)
    return (
        <li 
          className={`
            relative flex items-center py-2 px-3 my-1 
            font-medium rounded-md cursor-pointer 
            transition-colors group
            ${
                active
                    ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                    : 'hover:bg-indigo-50 text-gray-600'
            }
          `}>
            {icon}
            <span className={`overflow-hidden transition all ${expanded ? 'w-52 ml-3' : 'w-0'}`}> {text} </span>
            {alert && (<div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '': 'top-2'}`}/>)}

            {!expanded && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 
                                           bg-indigo-100 text-indigo-800 text-sm invisible opacity-20
                                           -translate-x-3 transition-all group-hover:visible group-hover:opacity-100
                                           group-hover:translate-x-0`}> {text} </div>}
        </li>
    )
}