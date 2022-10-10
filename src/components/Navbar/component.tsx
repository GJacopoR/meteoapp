import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    const [placeValue, setPlaceValue] = useState<string>('')
        
    const handleSubmit = (event: MouseEvent) => {
        event.preventDefault()
        // TODO : finder
    }

    return <section>
        <Link to="/">Home</Link>
        <form>
            <input type="text" placeholder="Enter your city" onChange={(e) => setPlaceValue(e.target.value)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
            <button type="reset" onClick={() => setPlaceValue('')}>x</button>
        </form>
    </section>
}