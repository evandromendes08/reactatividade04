import React, { useState } from "react";
import logo from '../../assets/logo.png'
import { registroUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const [inputValues, setInputValues] = useState({
        nome:'',
        email: '',
        senha: '',
        imagem:''
      });

      const navigate = useNavigate();

      const handleChangeValues = (evento) => {
        setInputValues({
          ...inputValues,
          [evento.target.name]: evento.target.value
        })
        console.log(inputValues);
    }
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log(inputValues);
        const response = registroUser(inputValues);
        if(response.data){
            alert(`Usuário ${response.data.nome} Cadastrado com sucesso!`);
            navigate('/login');
        }
      };
    return(
        <main className='h-screen w-full banner'>
        <div className='flex flex-col pt-20 items-center h-screen'>
          <img className='w-52' src={logo} alt='logotipo food app' />
          <h1 className="text-2xl text-gray-600">Cadastro de Usuário</h1>
          <form onSubmit={handleSubmit} className='bg-gray-300 w-96 mt-6 p-4 rounded-lg shadon-lg'>
            <div className='flex flex-col space-y-6'>
              <input
                type="text"
                placeholder="Digite o seu nome:"
                name="nome"
                className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
                onChange={handleChangeValues}
              />
              <input
                type="text"
                placeholder="Digite seu email:"
                name="email:"
                className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
                onChange={handleChangeValues}
              />
              <input
                type="password"
                placeholder="Digite sua senha:"
                name="senha"
                className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
                onChange={handleChangeValues}
              />
              <input
                type="text"
                placeholder="Insira a URL da imagem"
                name="imagem"
                className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
                onChange={handleChangeValues}
               />
             </div>
            <button type="submit" className="w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    )
}

export default Registro;