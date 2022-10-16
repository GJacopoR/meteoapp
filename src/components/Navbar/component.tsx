import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/component";
import SearchBar from "../SearchBar/component";
import styles from "./style.module.scss";

export default function Navbar(){

    const [loginModal, setLoginModal] = useState<boolean>(false)
        
    const handleSubmit = (event: MouseEvent) => {
        event.preventDefault()
        // TODO : finder
    }

    return <section className={styles.Navbar}>
        <Link className={styles.Navbar__right} to="/">JMeteo</Link>
        <div className={styles.Navbar__left}>
            <button onClick={() => setLoginModal(!loginModal)}>LogIn</button>

            <SearchBar/>
        </div>
        {loginModal && <LoginModal/>}
    </section>
}