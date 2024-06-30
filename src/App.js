import './css/App.css';
import { BrowserRouter as useEffect, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Login from './page/Login';
import Home from './page/Home';
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loading  from './page/Loading';
import AuthenticationGuard  from "./authentication-guard";
import { SongProvider } from './context/SongContext';
import { useNavigate } from "react-router-dom";



function App() {

  const { isLoading, isAuthenticated} = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated){
      navigate('/home');
    }
  },[isAuthenticated, navigate]);
  
  if (isLoading) {
    return (
      <div className="page-layout">
        <Loading />
      </div>
    );
  }

  return (
    <SongProvider>
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<AuthenticationGuard component={Home} />}/> 
      </Routes>
    </SongProvider>
  );
}

export default App;
