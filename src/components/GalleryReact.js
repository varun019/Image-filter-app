import React, { useState } from 'react'
import Menu from "./Menu.json";
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';

const GalleryReact = () => {
    const [items, setItems] = useState(Menu);
    const allvalues = [...new Set(Menu.map((currElem) => currElem.category)), "All"]
    const [catItems, setCatItems] = useState(allvalues)

    const filterItems = (category) => {
        if (category === "All") {
            setItems(Menu);
            return;
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setItems(updatedItems);
    }
    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark">
                <div className="container-xl">
                    <a className="navbar-brand text-white" href="#">Order your Favourite Food</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        catItems.map((curElem, index) => {
                            return <ul className="navbar-nav ms-auto mb-2 mb-lg-0" key={index}>
                                <li className="nav-item">
                                    <Link
                                        to='#'
                                        className="nav-link active text-white"
                                        onClick={() => filterItems(curElem)}>{curElem}</Link>
                                </li>
                            </ul>
                        })
                    }
                </div>
            </nav>
            <MenuItems items={items} />
        </>
    )
}

export default GalleryReact;