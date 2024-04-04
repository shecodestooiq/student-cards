import Context from '../store/store';
import { useContext } from 'react';
function User2() {
  const { user } = useContext(Context);
  console.log(user);

  return <>user 2:{user.name}</>;
}

export default User2;
