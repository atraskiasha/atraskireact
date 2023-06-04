/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './upcoming.css';
import bloger from './imagegallery/bloggers mela delhi templt2-01 (1).png';

export default function Upcoming() {
  const [values, setValues] = useState(1);

  const Decrement = () => {
    setValues(values - 1);
  };

  const Increment = () => {
    setValues(values + 1);
  };

  return (
    <div className="heading">
      <h1 className="upcoming" style={{ fontSize: '40px' }}>
        Upcoming Events
      </h1>

      <div className="blogger_mela">
        <div className="sections">
          <main role="main">
            <div className="product">
              <figure>
                <img src={bloger} alt="Product Image" className="product-image" />
              </figure>

              <div className="product-description">
                <div className="info">
                  <h1>BLOGGER’S MELA (DELHI)</h1>
                  <p></p>
                </div>

                <div className="price">₹150.00</div>
              </div>

              <div className="product-sidebar">
                <div className="quantity">
                  <button onClick={Decrement}>-</button>

                  <div className="box" contentEditable="true">
                    {values}
                  </div>
                  <button onClick={Increment}>+</button>
                </div>
              </div>
            </div>
          </main>
        </div>

        <div className="sections">
          <main role="main">
            <div className="product">
              <figure>
                <img src={bloger} alt="Product Image" className="product-image" />
              </figure>

              <div className="product-description">
                <div className="info">
                  <h1>BLOGGER’S MELA (DELHI)</h1>
                  <p></p>
                </div>

                <div className="price">₹150.00</div>
              </div>

              <div className="product-sidebar">
                <div className="quantity">
                  <button onClick={Decrement}>-</button>

                  <div className="box" contentEditable="true">
                    {values}
                  </div>
                  <button onClick={Increment}>+</button>
                </div>
              </div>
            </div>
          </main>
        </div>

        <div className="sections">
          <main role="main">
            <div className="product">
              <figure>
                <img src={bloger} alt="Product Image" className="product-image" />
              </figure>

              <div className="product-description">
                <div className="info">
                  <h1>BLOGGER’S MELA (DELHI)</h1>
                  <p></p>
                </div>

                <div className="price">₹150.00</div>
              </div>

              <div className="product-sidebar">
                <div className="quantity">
                  <button onClick={Decrement}>-</button>

                  <div className="box" contentEditable="true">
                    {values}
                  </div>
                  <button onClick={Increment}>+</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
