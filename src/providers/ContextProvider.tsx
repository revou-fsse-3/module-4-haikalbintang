import { ReactNode, createContext, useState } from 'react'

export interface Pokemon {
  species: string
  type: string
  hp: number
  attack: number
  defense: number
}

interface Context {
  pokemon?: Pokemon
  setPokemon?: React.Dispatch<React.SetStateAction<Pokemon | undefined>>
}

interface Props {
  children: ReactNode
}

const defaultValue: Context = {
  pokemon: undefined,
  setPokemon: undefined,
}

export const AppContext = createContext(defaultValue)

const ContextProvider = ({ children }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon>()

  return <AppContext.Provider value={{ pokemon, setPokemon: setPokemon }}>{children}</AppContext.Provider>
}

export default ContextProvider
