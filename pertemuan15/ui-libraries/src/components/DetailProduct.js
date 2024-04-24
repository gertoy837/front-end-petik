import React from "react";

const DetailProduct = () => {
  return (
    <section className="section mt-5">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <figure className="image is4by3">
              <img src="https://picsum.photos/800/600" alt="product" />
            </figure>
          </div>
          <div className="column">
            <div className="content">
              <div className=" title is-4">Product Name</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate atque quos aperiam? Architecto molestias distinctio
                officia necessitatibus quisquam repellat doloremque similique
                odio! Similique quos consequuntur voluptatem suscipit! Iste,
                molestias dicta.
              </p>
              <p>
                <strong className="has-text-dark">Price : </strong> RP 1.000.000.-
              </p>
              <p>Stock</p>
              <div class="field p-5">
                <button className="button is-primary is-fullwidth has-text-white mb-3">Add to cart</button>
                <button className="button is-primary is-outlined is-fullwidth">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
