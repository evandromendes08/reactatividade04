import React, { useContext, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    senha: '',
    cep: '',
    endereco: '',
    cidade: '',
    estado: ''
  });

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChangeValues = (evento) => {
    const { name, value } = evento.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });

    if (name === 'cep' && value.length === 8) {
      fetchCep(value);
    }
  };

  const fetchCep = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.data.erro) {
        const { logradouro, localidade, uf } = response.data;
        setInputValues((prevState) => ({
          ...prevState,
          endereco: logradouro,
          cidade: localidade,
          estado: uf
        }));
      } else {
        console.error('CEP não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser(inputValues);
    navigate('/login');
  };

  return (
    <main className='h-screen w-full'>
      <div className='flex flex-col pt-20 items-center h-screen'>
        <img className='w-52' src={logo} alt='logotipo food app' />
        <form onSubmit={handleSubmit} className='bg-gray-300 w-96 mt-6 p-4 rounded-lg shadon-lg'>
          <div className='flex flex-col space-y-6'>
            <input
              type="email"
              placeholder="Digite o seu email:"
              name="email"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Digite seu CEP:"
              name="cep"
              value={inputValues.cep}
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Endereço"
              name="endereco"
              value={inputValues.endereco}
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              readOnly
            />
            <input
              type="text"
              placeholder="Cidade"
              name="cidade"
              value={inputValues.cidade}
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              readOnly
            />
            <input
              type="text"
              placeholder="Estado"
              name="estado"
              value={inputValues.estado}
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              readOnly
            />
            <input
              type="password"
              placeholder="Digite sua senha:"
              name="senha"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-700 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="password"
              placeholder="Repita sua senha:"
              name="senha"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-700 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              onChange={handleChangeValues}
            />
          </div>
          <button type="submit" className="w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
