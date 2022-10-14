import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/component";
import styles from "./style.module.scss";

export default function Navbar(){
    const [placeValue, setPlaceValue] = useState<string>('')

    const [loginModal, setLoginModal] = useState<boolean>(false)
        
    const handleSubmit = (event: MouseEvent) => {
        event.preventDefault()
        // TODO : finder
    }

    return <section className={styles.Navbar}>
        <Link className={styles.Navbar__right} to="/">JMeteo</Link>
        <div className={styles.Navbar__left}>
            <button onClick={() => setLoginModal(!loginModal)}>LogIn</button>
            <form>
                <input type="text" placeholder="Enter your city" onChange={(e) => setPlaceValue(e.target.value)}/>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
                <button type="reset" onClick={() => setPlaceValue('')}>x</button>
            </form>
        </div>
        {loginModal && <LoginModal/>}
    </section>
}