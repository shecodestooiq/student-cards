import Context from '../store/store';
import { useContext } from 'react';
function User1() {
  const { user, setUser } = useContext(Context);

  return (
    <>
      user 1:{user.name}
      <button onClick={() => setUser({ name: 'Noor' })}>Change</button>
    </>
  );
}

export default User1;
