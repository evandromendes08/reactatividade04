import { Link } from "react-router-dom";

const Contato = () => {
    return (
        <div>
            <br></br>
            <h3 className='text-center text-3xl md:tex-4x1 lg:text-5xl font-semibold text-gray-900'>Entre em contato conosco em caso de dúvidas!</h3>
            <br></br>
            <h2 className='text-center text-3xl md:tex-4x1 lg:text-5xl font-semibold text-red-600'>NOSSO EMAIL DE CONTATO: food@food.com</h2>
            <br></br>
            <div className='bg-primary px-6 text-white text-center rounded-full transition duration-700 hover:scale-105 lg:text-2xl'>
            <Link to='/'>Voltar para Login</Link>
            </div>
            
        </div>
    )
}

export default Contato;