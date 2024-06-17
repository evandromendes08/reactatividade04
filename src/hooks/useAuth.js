import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi } from "../services/authService";

const useAuth = () => {

    const [userLogged, setUserLogged] = useState(true);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect (() => {
      const userInfo = localStorage.getItem('userInfo');

      if(userInfo){
        setUserLogged(true);
      }
      setLoading(false);
    }, [])
    

    const loginUser = async (inputValues) =>{
        const response = await loginUserApi(inputValues)
          const data = await response.data;
          console.log(data);
          localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/')
        setUserLogged(true);
    }
    const logoutUser = () => {
      setUserLogged(false);
      localStorage.clear();
      navigate('/login') 
    }
    
    return (userLogged, loading, loginUser, logoutUser)
}

export default useAuth;