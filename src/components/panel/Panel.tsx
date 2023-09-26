import { LoginContext } from '../../context/LoginContext';
import { useContext } from 'react';
interface UserLog {
  logout: () => void;
}

const Panel = () => {
  const userLog: UserLog = useContext(LoginContext);
  return (
    <div>
      <button onClick={userLog.logout}>logOUT</button>
    </div>
  )
}

export default Panel