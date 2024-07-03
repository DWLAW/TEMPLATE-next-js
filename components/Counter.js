import { useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <Button onClick={() => setValue((prevState) => prevState + 1)}>Increment</Button>
      <Button disabled={value === 0} onClick={() => setValue((prevState) => prevState - 1)}>Decrement</Button>
      <Button onClick={() => setValue(0)}>Reset</Button>
    </>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Counter Default',
};
