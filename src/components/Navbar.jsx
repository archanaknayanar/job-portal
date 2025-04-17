import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'


const Navbar = () => {
    const linkClass = ({ isActive }) => (
        isActive
        ? "text-white bg-black hover:bg-gray-900 rounded-md hover:text-white px-3 py-2"
        : "text-white  hover:bg-gray-900 rounded-md hover:text-white px-3 py-2"
    );
    return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <a className="flext items-center justify-between">
                        <img className="h-10 w-autp" src={logo} alt='reactlogo'></img>
                        <span className='hidden text-white text-2xl font-bold ml-2'>React Jobs</span>
                    </a>
                    <div className='md:ml-auto'>
                        <div className='flex space-x-2'>
                            <NavLink className={linkClass} to='/'>Home</NavLink>
                            <NavLink className={linkClass} to='/jobs'>Jobs</NavLink>
                            <NavLink className={linkClass} to='/add-job'>Add Job</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;