import { Routes, Route, Navigate,  } from "react-router-dom";

import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';
import Home from './components/pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './components/pages/login/Login';
import Panel from './components/pages/panel/Panel';
import Shop from "./components/pages/shop/Shop";



function App() {
  const userLog = useContext(LoginContext)

  return (
    <div className="App"> 
      <Routes>
      <Route  element={<Layout />}>
       <Route index path='/' element={<Home  />} />
       <Route index path='/Shop' element={<Shop  />} />

       <Route index path='/login' element={
         userLog.isLogin?
         <Navigate to='/panel' replace={true} />
         :
              <Login />
       }/>
       <Route index path='/panel' element={
        userLog.isLogin?
              <Panel  />
            :
        <Navigate to='/login' replace={true} />
        }/>

      </Route>
    </Routes>
    </div>
  );
}

export default App;