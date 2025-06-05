import { Fragment } from "react/jsx-runtime";

const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

export const BasicFunctions = () => {
  return (
    <Fragment>
      <h3>Funciones Básicas</h3>
      <p>El resultado de sumar 2 + 3 es = {addTwoNumbers(2, 3)}</p>
    </Fragment>
  );
};
