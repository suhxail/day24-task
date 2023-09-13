import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';
import { BsStarFill } from 'react-icons/bs';
import data from '../Components/Data';
import { useState } from 'react';



function Section(props) {

    const [buttonChange, setButtonChange] = useState({
        btn1: "Add to cart",
        btn2: "Add to cart",
        btn3: "Add to cart",
        btn4: "Add to cart",
        btn5: "Add to cart",
        btn6: "Add to cart",
        btn7: "Add to cart"

    })
    // console.log("section" , props.text2)

    //    const handleSubmit = () => {
    //     props.props.handleClick()
    //     }

    // console.log(status)


    return (
        <div>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Fancy Product</h5>

                                        $40.00 - $80.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                {/* <div className="badge bg-dark text-white position-absolute" style={{top: 0.5 + 'rem'} , {right: 0.5 + 'rem'}}>Sale</div> */}

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Special Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <StarRating />

                                        </div>

                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                                        props.handleClick(1)
                                        setButtonChange({ ...buttonChange, btn1: buttonChange.btn1 == "Add to cart" ? "Remove from cart" : "Add to cart" })
                                    }}>{buttonChange.btn1}</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                {/* <div className="badge bg-dark text-white position-absolute" style={{top: 0.5 + 'rem'} , {right: 0.5 + 'rem'}}>Sale</div> */}

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Sale Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            {/* <StarRating /> */}

                                        </div>

                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                                        props.handleClick(2)
                                        setButtonChange({ ...buttonChange, btn2: buttonChange.btn2 == "Add to cart" ? "Remove from cart" : "Add to cart" })
                                    }}>{buttonChange.btn2}</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Popular Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            {/* <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div> */}

                                            <StarRating />

                                        </div>

                                        $40.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                                        props.handleClick(3)
                                        setButtonChange({ ...buttonChange, btn3: buttonChange.btn3 == "Add to cart" ? "Remove from cart" : "Add to cart" })
                                    }}>{buttonChange.btn3}</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                {/* <div className="badge bg-dark text-white position-absolute" style={{top: 0.5 + 'rem'} , {right: 0.5 + 'rem'}}>Sale</div> */}

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Sale Item</h5>

                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                                        props.handleClick(4)
                                        setButtonChange({ ...buttonChange, btn4: buttonChange.btn4 == "Add to cart" ? "Remove from cart" : "Add to cart" })
                                    }}>{buttonChange.btn4}</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Fancy Product</h5>

                                        $120.00 - $280.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                                        props.handleClick(5)
                                        setButtonChange({ ...buttonChange, btn5: buttonChange.btn5 == "Add to cart" ? "Remove from cart" : "Add to cart" })
                                    }}>{buttonChange.btn5}</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                {/* <div className="badge bg-dark text-white position-absolute" style={{top: 0.5 + 'rem'}, {right: 0.5 + 'rem'}}>Sale</div> */}

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Special Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            {/* <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div> */}

                                            <StarRating />

                                        </div>

                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                                        props.handleClick(6)
                                        setButtonChange({ ...buttonChange, btn6: buttonChange.btn6 == "Add to cart" ? "Remove from cart" : "Add to cart" })
                                    }}>{buttonChange.btn6}</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Popular Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            {/* <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div> */}

                                            <StarRating />

                                        </div>

                                        $40.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {
                                            props.handleClick(7)
                                            setButtonChange({ ...buttonChange, btn7: buttonChange.btn7 == "Add to cart" ? "Remove from cart" : "Add to cart" })
                                        }}>{buttonChange.btn7}</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    )
}

export default Section