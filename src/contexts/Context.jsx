'use client'

import { createContext, useContext } from 'react'

const MyContext = createContext({})

export const ContextProvider = ({ children }) => {
  const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT_URL

  return (
    <MyContext.Provider
      value={{
        ENDPOINT
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => useContext(MyContext)
