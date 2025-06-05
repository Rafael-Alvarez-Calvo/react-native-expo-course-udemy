import { Fragment } from "react/jsx-runtime";

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  address: IAddress;
}

interface IAddress {
  street?: string;
  number: number;
  city: string;
}

export const ObjectLiterals = () => {
  const person: IPerson = {
    firstName: "Rafa",
    lastName: "Álvarez",
    age: 32,
    address: {
      //   street: "Calle Falsa",
      number: 123,
      city: "Madrid",
    },
  };

  return (
    <Fragment>
      <h3>Objetos Literales</h3>
      <p>{JSON.stringify(person, null)}</p>
    </Fragment>
  );
};
