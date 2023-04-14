import React from 'react'

const MenuItems = (props) => {
    return (<> <div className='container-fluid g-5'>
        <div className="row ">

            {
                props.items.map(({ image, description, price, name }, id) => (
                     <div className='item1 col-sm-12 col-md-6 col-lg-6 col-xl-4 g-3' key={id}>
                        <div className="card mb-3 card-group">
                            <div className="row">
                                <div className="col-md-4">
                                    <img
                                        src={image}
                                        className="img-fluid rounded-start object-fit-cover h-100"
                                        alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{description}</p>
                                        <p className='fw-semibold'>Price : {price}</p>
                                        <div className='d-flex justify-content-end'>
                                            <button className='btn btn-warning text-end cart'>Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    )

                )}
        </div>
    </div> </>
    )
}
export default MenuItems;