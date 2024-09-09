import { useState } from "react"


export default function PokemonHookComponent() {
    const [pokemonName, setPokemonName] = useState("")

    const handlerButton = () => {
        console.log(pokemonName)
    }
    return (
        <>
            <input type="text" onChange={e => setPokemonName(e.target.value)} />
            <button onClick={handlerButton}>Hit me!</button>
        </>
    )
}