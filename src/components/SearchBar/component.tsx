import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function SearchBar(){

    const [placeValue, setPlaceValue] = useState<string>('')

    // useEffect(() => {
    //     fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${placeValue}`)
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    // }, [placeValue])
        
    const resetField = () => {
        setPlaceValue('')
    }

    const handleSubmit = (event: React.MouseEvent) => {
        console.log(placeValue)
        resetField()
        console.log(placeValue)
        // event.preventDefault()
        // TODO : autocomplete?
    }

    return <section>
        <form>
            {/* <div key={placeValue}>
                <input type="text" defaultValue={placeValue} placeholder="Enter your city" onChange={(e) => setPlaceValue(e.target.value)}/>
            </div> */}
            <input type="text" value={placeValue} placeholder="Enter your city" onChange={(e) => setPlaceValue(e.target.value)}/>
            <Link to={`/${placeValue}`}>
                <button onClick={(e) => handleSubmit(e)}>Search</button>
            </Link>
            <button type="reset" onClick={resetField}>x</button>
        </form>
    </section>
}