import { Routes, Route, Navigate,  } from "react-router-dom";

import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Panel from './components/panel/Panel';



function App() {
  const userLog = useContext(LoginContext)

  return (
    <div className="App">
      <Routes>
      <Route  element={<Layout  />}>
       <Route index path='/' element={<Home  />} />
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