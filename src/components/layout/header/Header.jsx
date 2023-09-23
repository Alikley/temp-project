import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../../context/LoginContext';
import { useContext } from 'react';

function Header() {
  const userLog = useContext(LoginContext)


  return (
    <div>
           {/* <NavLink to="/">خانه</NavLink>
            {
              userLog.isLogin?
              <NavLink to="/panel"> پنل</NavLink>
              :
              <NavLink to="/login">ورود</NavLink>

            } */}
            <h1>
              Header
            </h1>
    </div>
  )
}

export default Header