import React from "react";
import iceImg1 from "../Images/Ice1.png"
import iceImg2 from "../Images/ice2.png"
import ProImg1 from "../Images/pro1.png"
import ProImg2 from "../Images/pro2.png"
import ProImg3 from "../Images/pro3.png"
import cowImg from "../Images/cowImg.png"
import cow from "../Images/cow.png"
import frameImg from "../Images/Frame.png"
import iceNew from "../Images/icecrema.png"
import madeImg from "../Images/madeImg.png"
import clientImg1 from "../Images/clientImg1.jpg"
import clientImg2 from "../Images/clientImg2.jpg"
import clientImg3 from "../Images/clientImg3.jpg"

export default function Home() {
    return (
        <div>
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 mt-5 mb-5">
                            <h1 className="h1Ice">Ice cream made with passion</h1>
                            <div className="mt-3">
                                <button className="btn btnPro">Products</button>
                                <span className="madeText">How it's made?</span>
                            </div>
                            <img src={iceImg1} alt="" className="iceImg1" />
                            <span className="iceText">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="41" height="16" viewBox="0 0 41 16" fill="none" className="arrow">
                                    <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="#FCFCFC" />
                                </svg>
                                </p>
                            </span>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={iceImg2} alt="" className="iceImg2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="foneIce">
                <div className="container foneIcecont text-center">
                    <h3>100% natural</h3>
                    <h1 className="text-center">products</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="h-100 proCard">
                            <img src={ProImg1} alt="" className="proImg" />
                            <div className="p-4 textProCard">
                                <h3>ice cream</h3>
                                <p>Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer</p>
                                <div className="arrowsvg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="16" viewBox="0 0 42 16" fill="none">
                                        <path d="M40.9745 8.5956C41.365 8.20507 41.365 7.57191 40.9745 7.18138L34.6106 0.817421C34.22 0.426897 33.5869 0.426897 33.1963 0.817421C32.8058 1.20795 32.8058 1.84111 33.1963 2.23163L38.8532 7.88849L33.1963 13.5453C32.8058 13.9359 32.8058 14.569 33.1963 14.9596C33.5869 15.3501 34.22 15.3501 34.6106 14.9596L40.9745 8.5956ZM0.0327148 8.88849H40.2674V6.88849H0.0327148V8.88849Z" fill="#131313" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="h-100 proCard procard2">
                            <img src={ProImg2} alt="" className="proImg" />
                            <div className="p-4 textProCard">
                                <h3>ice coffee</h3>
                                <p>Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavor enhancers</p>
                                <div className="arrowsvg2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="16" viewBox="0 0 42 16" fill="none">
                                        <path d="M40.9745 8.5956C41.365 8.20507 41.365 7.57191 40.9745 7.18138L34.6106 0.817421C34.22 0.426897 33.5869 0.426897 33.1963 0.817421C32.8058 1.20795 32.8058 1.84111 33.1963 2.23163L38.8532 7.88849L33.1963 13.5453C32.8058 13.9359 32.8058 14.569 33.1963 14.9596C33.5869 15.3501 34.22 15.3501 34.6106 14.9596L40.9745 8.5956ZM0.0327148 8.88849H40.2674V6.88849H0.0327148V8.88849Z" fill="#131313" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="h-100 proCard procard3">
                            <img src={ProImg3} alt="" className="proImg" />
                            <div className="p-4 textProCard">
                                <h3>milkshakes</h3>
                                <p>Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice</p>
                                <div className="arrowsvg3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="16" viewBox="0 0 42 16" fill="none">
                                        <path d="M40.9745 8.5956C41.365 8.20507 41.365 7.57191 40.9745 7.18138L34.6106 0.817421C34.22 0.426897 33.5869 0.426897 33.1963 0.817421C32.8058 1.20795 32.8058 1.84111 33.1963 2.23163L38.8532 7.88849L33.1963 13.5453C32.8058 13.9359 32.8058 14.569 33.1963 14.9596C33.5869 15.3501 34.22 15.3501 34.6106 14.9596L40.9745 8.5956ZM0.0327148 8.88849H40.2674V6.88849H0.0327148V8.88849Z" fill="#131313" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* How it is made */}
            <div className="made w-100 mb-5">
                <div className="container text-center">
                    <div className="p-5 m-5">
                        <h3>tradition and love </h3>
                        <h2>how it's made?</h2>
                    </div>
                    <div className="warning ImgRow">.</div>
                    <div className="row">
                        <div className="col-md-6 ImgRow">
                            <img src={cowImg} alt="" className="cowImg" />
                        </div>
                        <div className="col-md-6 text-center mt-5 textP">
                            <p className="mt-5">
                                Ice is a place where you will become not only a little happier,
                                but also healthier. Health is the main value for us, and we follow it when creating our handmade desserts.
                            </p>
                            <p>
                                We use traditional recipes and 100% natural ingredients.
                                Our products are so natural that they can be given to children
                                from the age of three years. Sweets lovers can expect 55 types of ice cream, 15 types of coffee and 23 milkshakes.
                                This is enough to choose ice cream and coffee for any mood!
                            </p>
                            <div className="text-start fw-bold">
                                <button className="btn buyBtn" type="submit">Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="-3 0 7 10" fill="none">
                                        <path d="M1 1L5.95 5L1 9" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svgNav" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="row iconRow text-center text-white">
                        <div className="col-md-4 mb-5">
                            <img src={cow} alt="" />
                            <br /><br />
                            <h1 className="text-center">721</h1>
                            <p>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                        </div>
                        <div className="col-md-4 mb-5">
                            <img src={frameImg} alt="" />
                            <br /><br />
                            <h1 className="text-center">16 kg</h1>
                            <p>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                        </div>
                        <div className="col-md-4 mb-5">
                            <img src={iceNew} alt="" />
                            <br /><br />
                            <h1 className="text-center">84</h1>
                            <p>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center"><img src={madeImg} alt="" className="madeImg" /></div>
            <div className="hel">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner text-center">
                        <div class="carousel-item active " data-bs-interval="2000">
                            <img src={clientImg1} className="d-block clientImg mb-4 mt-4" alt="..." />
                            <strong>John, USA</strong>
                            <p className="text-center mt-3">I love visiting your cafe. You prepare the most delicious ice
                                cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.
                            </p>
                        </div>
                        <div class="carousel-item " data-bs-interval="2000">
                            <img src={clientImg2} className="d-block clientImg mb-4 mt-4" alt="..." />
                            <strong>Emily, Los Angeles</strong>
                            <p className="text-center mt-3">I love visiting your cafe. You prepare the most delicious ice
                                cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.
                            </p>
                        </div>
                        <div class="carousel-item " data-bs-interval="2000">
                            <img src={clientImg3} className="d-block clientImg mb-4 mt-4" alt="..." />
                            <strong>Eric, California</strong>
                            <p className="text-center mt-3">I love visiting your cafe. You prepare the most delicious ice
                                cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}