import { useState } from 'react';
import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  const [value, setValue] = useState(0);

  // const user = { displayName: 'Dr. T' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <>
      <h1>Counter Title</h1>
      <h2>{value}</h2>
      <Button onClick={() => setValue((prevState) => prevState + 1)}>Increment</Button>
      <Button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</Button>
      <Button type="button" onClick={() => setValue(0)}>Reset</Button>
    </>
  );
}

export default Home;
