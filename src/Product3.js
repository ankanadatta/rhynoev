import React from 'react';
import prod3 from './se03max.png';

const Product3 = () => {
  return (
    <div>
      <h1 className='product-head lato-bold-italic w3-animate-left'>SE03 Max</h1>
      <img className='product-img w3-animate-zoom' src={prod3} />
      <div className="container lato-regular mt-4 table">This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.</div>
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
          <div className="col under">Rhyno SE03 Max</div>
          <div className="col">Battery</div>
          <div className="col tcol">2.7Kwh</div>
          <div className="col tcol">Battery features</div>
          <div className="col">LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</div>
          <div className="col">Battery warranty</div>
          <div className="col tcol">3 years</div>
          <div className="col tcol">Charging time</div>
          <div className="col">4 hours (12A)</div>
          <div className="col">Motor</div>
          <div className="col tcol">2000W</div>
          <div className="col tcol">Max speed</div>
          <div className="col">65 km/h</div>
          <div className="col">Warranty on electronics</div>
          <div className="col tcol">1 year</div>
          <div className="col tcol">Max range (@30km/h)</div>
          <div className="col">120 km</div>
          <div className="col">Max range (@45km/h)</div>
          <div className="col tcol">100 km</div>
          <div className="col tcol">Max range (@full speed)</div>
          <div className="col">80 km</div>
          <div className="col">Other key benefits</div>
          <div className="col tcol">Fire-safe Battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</div>
        </div>
      </div>

      <div className='buynow'><button type="button" className='lato-regular btn btn-dark m-5'>Buy now</button></div>
    </div>
  )
}

export default Product3
