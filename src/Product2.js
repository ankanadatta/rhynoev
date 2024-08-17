import React from 'react';
import prod2 from './se03.png';

const Product2 = () => {
  return (
    <div>
      <h1 className='product-head lato-bold-italic w3-animate-left'>SE03</h1>
      <img className='product-img w3-animate-zoom' src={prod2} />
      <div className="container lato-regular mt-4 table">Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!</div>
      <div class="btn-group-wrap mt-5">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary border-0">Red</button>
        <button type="button" class="btn btn-primary border-0">Black</button>
        <button type="button" class="btn btn-primary border-0">Blue</button>
        <button type="button" class="btn btn-primary border-0">Golden</button>
      </div></div>
      <div className="container text-center table mt-4 lato-regular">
        <div className="row row-cols-2">
          <div className="col tcol under">Specification</div>
          <div className="col under">Rhyno SE03</div>
          <div className="col">Battery</div>
          <div className="col tcol">2.7Kwh</div>
          <div className="col tcol">Battery features</div>
          <div className="col">LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</div>
          <div className="col">Battery warranty</div>
          <div className="col tcol">3 years</div>
          <div className="col tcol">Charging time</div>
          <div className="col">4 hours (12A)</div>
          <div className="col">Motor</div>
          <div className="col tcol">1500W</div>
          <div className="col tcol">Max speed</div>
          <div className="col">55 km/h</div>
          <div className="col">Warranty on electronics</div>
          <div className="col tcol">1 year</div>
          <div className="col tcol">Max range (@30km/h)</div>
          <div className="col">150 km</div>
          <div className="col">Max range (@45km/h)</div>
          <div className="col tcol">110 km</div>
          <div className="col tcol">Max range (@full speed)</div>
          <div className="col">90 km</div>
          <div className="col">Other key benefits</div>
          <div className="col tcol">Fire-safe Battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</div>
        </div>
      </div>

      <div className='buynow'><button type="button" className='lato-regular btn btn-dark m-5'>Buy now</button></div>
    </div>
  )
}

export default Product2
