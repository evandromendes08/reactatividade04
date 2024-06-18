import React, { useContext } from 'react'
import logo from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { BsFillCartFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const { userLogged, userFull, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className='bg-white z-50 top-0 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
            <div className='flex flex-grow items-center'>
                <Link to='/'>
                <img src={logo} alt="Logo" className='w-36 cursor-pointer'/>
                <h1 className='text-center text-3xl font-semibold text-gray-700'> Food App</h1>
                </Link>
            </div>
            {userLogged ? (
              <div className='flex items-center justify-end space-x-4'>
                <div className='relative flex cursor-pointer'>
                  <span className='bg-primary w-4 h-4 p-1 rounded-full flex items-center justify-center text-white absolute -right-2 -top-2'>2</span>
                  <BsFillCartFill className='w-5 h-5 cursor-pointer text-orange-500'/>
                </div>
                <img src='' alt=''/>
                <p className=' text-orange-500'>Bem Vindo, {userFull.nome} !</p>
                <Link to='/admin'>Admin</Link>
                <img src={userFull.imagem} className="w-10 h-10 rounded-full" alt="" />
                <MdLogout className='w-6 h-6 cursor-pointer  text-orange-500'onClick={logoutUser}/>
              </div>

            ) : (
              <div className='flex items-center justify-end space-x-6'>

              <button onClick={() => navigate('/login')} className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Login</button>

              <button onClick={() => navigate('/registro')} className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Cadastro</button>
            
              <button onClick={() => navigate('/contato')} className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Contato</button>

              </div> 
            )}

        </nav>

    </header>
  )
}

export default Navbar