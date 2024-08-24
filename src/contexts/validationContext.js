import React, { createContext, useState } from "react";

export const ValidContext = createContext()

function ValidProvider({ children }) {
  
  const [valid, setValid] = useState(true)

  return (
    <ValidContext.Provider value={{ valid, setValid }}>
      {children}
    </ValidContext.Provider>
  )
}

export default ValidProvider