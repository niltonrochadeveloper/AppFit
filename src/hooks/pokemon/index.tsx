import * as React from 'react'
import { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } from '../../services/pokemon'

export default function usePokemonApi() {
  // Using a query hook automatically fetches data and returns query values

  const [pokemonName, setPokemonName] = React.useState<string>('')

//   const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName)
  const [ triggerGetPokemon, {data, error, isLoading} ] = useLazyGetPokemonByNameQuery()
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
    // console.log('data', data)
  // render UI based on data and loading state

  return {
    data,
    setPokemonName,
    error,
    isLoading,
    triggerGetPokemon
  }
}