import { Fragment } from "react/jsx-runtime";

export const BasicsTypes = () => {
  const name: string = "Rafa";
  const age: number = 32;
  const isDeveloper: boolean = true;
  const skills: string[] = ["Crear aplicaciones web", "React", "TypeScript"];

  return (
    <Fragment>
      <h3>Tipos básicos</h3>
      {name} - {age} años -
      {isDeveloper ? " Desarrollador web" : " No desarrollador"}
      <p>Habilidades: {skills.join(", ")}</p>
    </Fragment>
  );
};
