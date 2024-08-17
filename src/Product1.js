import React from 'react';
import prod1 from './se03lite.png';

const Product1 = () => {
  return (
    <div>
      <h1 className='product-head lato-bold-italic w3-animate-left'>SE03 Lite</h1>
      <img className='product-img w3-animate-zoom' src={prod1} />
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
          <div className="col under">Rhyno SE03 Lite</div>
          <div className="col">Battery</div>
          <div className="col tcol">1.8Kwh</div>
          <div className="col tcol">Battery features</div>
          <div className="col">LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</div>
          <div className="col">Battery warranty</div>
          <div className="col tcol">3 years</div>
          <div className="col tcol">Charging time</div>
          <div className="col">3 hours (12A)</div>
          <div className="col">Motor</div>
          <div className="col tcol">Motor</div>
          <div className="col tcol">Max speed</div>
          <div className="col">1500W</div>
          <div className="col">Warranty on electronics</div>
          <div className="col tcol">1 year</div>
          <div className="col tcol">Max range (@30km/h)</div>
          <div className="col">100 km</div>
          <div className="col">Max range (@45km/h)</div>
          <div className="col tcol">90 km</div>
          <div className="col tcol">Max range (@full speed)</div>
          <div className="col">70 km</div>
          <div className="col">Other key benefits</div>
          <div className="col tcol">Fire-safe Battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</div>
        </div>
      </div>

      <div className='buynow'><button type="button" className='lato-regular btn btn-dark m-5'>Buy now</button></div>

    </div>
  )
}

export default Product1
