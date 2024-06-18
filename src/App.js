import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login/index';
import { AuthProvider } from './context/AuthContext';
import Contato from './pages/Contato';
import Registro from './pages/Registro';
import ProtectedRoute from './Routes/ProtectedRoute';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProducts';
import EditProduct from './pages/EditProduct';
import ProductInfo from './components/Product';
import ProductInfo from './pages/ProductInfo';


function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
          }/>
        <Route path='/product/:id' element={
          <ProtectedRoute>
            <ProductInfo/>
          </ProtectedRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/admin' element={
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
        }/>
        <Route path='/admin/add-product' element={
            <ProtectedRoute>
              <AddProduct/>
            </ProtectedRoute>
        }/>
        <Route path='/admin/edit-product:id' element={
            <ProtectedRoute>
              <EditProduct/>
            </ProtectedRoute>
        }/>
        </Routes>
              
    </AuthProvider>

    </>
  );
}

export default App;
