import React, { createContext, useEffect, useState } from "react";

export const ClientContext = createContext()

function ClientProvider({ children }) {
  
  const [client, setClient] = useState(null)

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  )
}

export default ClientProvider