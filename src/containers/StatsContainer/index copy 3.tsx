// import { useRef } from 'react'
// import { Button, Card, Input, Text } from '../../components'
// import Pokemon from './Pokemon'
// import { useFetchingPokemon } from '../../hooks'

// const StatsContainer = () => {
//   //   const [pokemonName, setPokemonName] = useState('')
//   //   const [pokemonChosen, setPokemonChosen] = useState(false)
//   //   const [pokemon, setPokemon] = useState({})

//   const inputRef = useRef<HTMLInputElement>(null)

//   const { data, fetchingPokemon } = useFetchingPokemon({
//     enabled: true,
//   })
//   console.log(data)

//   return (
//     <div>
//       <Card border>
//         <Card border>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: '32px',
//                 marginBottom: '15px',
//               }}
//             >
//               Pokemon Stats
//             </h1>
//             <p>Name</p>
//             <Input />
//             <Button
//               label={'Search Pokemon'}
//               style={{
//                 margin: '15px',
//               }}
//             />
//           </div>
//         </Card>
//         <Card border>
//           <Pokemon pokemons={data} />
//           <Button label={'Fetch Ulang'} onClick={() => fetchingPokemon()} />
//           <Button label={'Update Value'} onClick={() => (inputRef.current!.value = 'value updated')} />
//           <input type="text" value={'ini value'} ref={inputRef} />
//         </Card>
//         <Card
//           border={false}
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '10px',
//           }}
//         >
//           {' '}
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Text>{`Species: ${data?.[0] ?? '-'}`}</Text>
//             <Text>{`Type: ${data ?? '-'} `}</Text>
//             <Text>{`HP: ${data ?? '-'} `}</Text>
//             <Text>{`Attack: ${data ?? '-'} `}</Text>
//             <Text>{`Defense: ${data ?? '-'} `}</Text>
//           </div>
//         </Card>
//       </Card>
//     </div>
//   )
// }

// export default StatsContainer
