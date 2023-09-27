import { Routes, Route, Navigate,  } from "react-router-dom";

import { useContext, useState } from 'react';
import { LoginContext } from './context/LoginContext';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Panel from './components/panel/Panel';

export interface CardItemType{
  id:number;
  category:string
  description:string;
  image:string;
  price:number;
  title:string
  amount:number
 }

function App() {
  const userLog = useContext(LoginContext)
  const [cardItems, setCardItems] = useState([] as CardItemType[])

  return (
    <div className="App">
      <Routes>
      <Route  element={<Layout cardItems={cardItems} setCardItems={setCardItems} />}>
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
