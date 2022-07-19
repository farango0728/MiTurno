import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvaider = ({ children }) => {
  const [selectSede, setSelectSede] = useState({
    name: "Sede 10",
    latitud: 6.250411,
    longitud: -75.588445,
    address: "",
    horario: "",
  });

  const [datos, setDatos] = useState({
    cedulaCiudadania: "",
    numeroDocumento: "",
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
  });

  return (
    <DataContext.Provider
      value={{
        selectSede,
        setSelectSede,
        datos,
        setDatos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvaider;
