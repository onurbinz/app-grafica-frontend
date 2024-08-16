import React, { createContext, useEffect, useState } from "react";

export const ClientContext = createContext()

function ClientProvider({ children }) {
  
  const [client, setClient] = useState(null)
  const [editClient, setEditClient] = useState(client)

  useEffect(() => {
    setEditClient(client)
  }, [client])

  return (
    <ClientContext.Provider value={{ client, setClient, editClient, setEditClient }}>
      {children}
    </ClientContext.Provider>
  )
}

export default ClientProvider