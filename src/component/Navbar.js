import React, {useContext} from "react"
import { BookContext } from "../context/BookContext";

const Navbar = () => {
    const {Books} = useContext(BookContext);
    return(
        <div className="navbar">
            <h2>Books todo</h2>
            <p>You have {Books.length} books to read.</p>
        </div>
    )
}

export default Navbar;