import React, {useState} from 'react'
import Menu from "./Menu";

const GalleryReact = () => {
    const [items,
        setItems] = useState(Menu);

    const filterItems = (categItems) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItems;
        })
        setItems(updatedItems);
    }

    return ( <> <nav className="navbar navbar-expand-md bg-dark">
        <div className="container-xl">
            <a className="navbar-brand text-white" href="#">Order your Favourite Food</a>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-htmlFor="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a
                            className="nav-link active text-white tab"
                            aria-current="page"
                            href="#"
                            onClick={() => setItems(Menu)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active text-white tab"
                            aria-current="page"
                            href="#"
                            onClick={() => filterItems('breakfast')}>Breakfast</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active text-white tab"
                            aria-current="page"
                            href="#"
                            onClick={() => filterItems('lunch')}>Lunch</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active text-white tab"
                            aria-current="page"
                            href="#"
                            onClick={() => filterItems('evening')}>Evening</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active text-white tab"
                            aria-current="page"
                            href="#"
                            onClick={() => filterItems('dinner')}>Dinner</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav> <div className = 'container-fluid g-5' > <div className="row ">

        {items.map((elem) => {
            const {image, description, price, name} = elem;
            return ( <> <div className='item1 col-sm-12 col-md-6 col-lg-6 col-xl-4 g-3 shade'>
                <div class="card mb-3 card-group">
                    <div class="row">
                        <div class="col-md-4">
                            <img
                                src={image}
                                className="img-fluid rounded-start object-fit-cover h-100"
                                alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">{description}</p>
                                <p className='fw-semibold'>Price : {price}</p>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-warning text-end cart'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> </>
                                
                )
                            
                })}
    </div> </div> 
        </>)
}

export default GalleryReact;