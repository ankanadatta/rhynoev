import React from 'react';
import prod1 from './se03lite.png';
import prod2 from './se03.png';
import prod3 from './se03max.png';
import { Link } from 'react-router-dom';

const CompareAll = () => {
    return (
        <div>
            <h1 className='product-head lato-bold w3-animate-top'>Compare All</h1>
            <div className='container mt-5 cards'>
                <div className="card">
                    <img src={prod1} className="card-img-top" />
                    <div className="card-body">
                        <Link className='cardlink' to="./../product1"><h5 className="card-title">SE03 Lite</h5></Link>
                        <p className="card-text">1.8Kwh Battery<br />3 hours (12A) charging time<br />1500W Motor</p>
                        <button className="btn btn-secondary">Buy now</button>
                    </div>
                </div>

                <div className="card">
                    <img src={prod2} className="card-img-top" />
                    <div className="card-body">
                        <Link className='cardlink' to="./../product2"><h5 className="card-title">SE03</h5></Link>
                        <p className="card-text">2.7Kwh Battery<br />4 hours (12A) charging time<br />2000W Motor</p>
                        <button className="btn btn-secondary">Buy now</button>
                    </div>
                </div>

                <div className="card">
                    <img src={prod3} className="card-img-top" />
                    <div className="card-body">
                        <Link className='cardlink' to="./../product3"><h5 className="card-title">SE03 Max</h5></Link>
                        <p className="card-text">2.7Kwh Battery<br />4 hours (12A) charging time<br />2000W Motor</p>
                        <button className="btn btn-secondary">Buy now</button>
                    </div>
                </div>
            </div>

            <div className="container text-center table mt-4 lato-regular">
                <div className="row row-cols-4">
                    <div className="col tcol under">Specification</div>
                    <div className="col under">Rhyno SE03 Lite</div>
                    <div className="col tcol under">Rhyno SE03</div>
                    <div className="col under">Rhyno SE03 Max</div>
                    <div className="col">Battery</div>
                    <div className="col tcol">1.8Kwh</div>
                    <div className="col">2.7Kwh</div>
                    <div className="col tcol">2.7Kwh</div>
                    <div className="col tcol">Battery features</div>
                    <div className="col">LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</div>
                    <div className="col tcol">LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</div>
                    <div className="col">LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</div>
                    <div className="col">Battery warranty</div>
                    <div className="col tcol">3 years</div>
                    <div className="col">3 years</div>
                    <div className="col tcol">3 years</div>
                    <div className="col tcol">Charging time</div>
                    <div className="col">3 hours (12A)</div>
                    <div className="col tcol">4 hours (12A)</div>
                    <div className="col">4 hours (12A)</div>
                    <div className="col">Motor</div>
                    <div className="col tcol">1500W</div>
                    <div className="col">1500W</div>
                    <div className="col tcol">2000W</div>
                    <div className="col tcol">Max speed</div>
                    <div className="col">55 km/h</div>
                    <div className="col tcol">55 km/h</div>
                    <div className="col">65 km/h</div>
                    <div className="col">Warranty on electronics</div>
                    <div className="col tcol">1 year</div>
                    <div className="col">1 year</div>
                    <div className="col tcol">1 year</div>
                    <div className="col tcol">Max range (@30km/h)</div>
                    <div className="col">100 km</div>
                    <div className="col tcol">150 km</div>
                    <div className="col">120 km</div>
                    <div className="col">Max range (@45km/h)</div>
                    <div className="col tcol">90 km</div>
                    <div className="col">110 km</div>
                    <div className="col tcol">100 km</div>
                    <div className="col tcol">Max range (@full speed)</div>
                    <div className="col">60 km</div>
                    <div className="col tcol">90 km</div>
                    <div className="col">80 km</div>
                    <div className="col">Other key benefits</div>
                    <div className="col tcol">Fire-safe Battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</div>
                    <div className="col">Fire-safe Battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</div>
                    <div className="col tcol">Fire-safe Battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</div>
                </div>
            </div>
        </div>
    )
}

export default CompareAll
