import React from "react";

const Home = () => {
  return (
    <div className="container container-fluid">
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" class="container mt-5">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3 my-3">
            <div class="card p-3 rounded">
              <img
                class="card-img-top mx-auto"
                src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">
                  <a href="">128GB Solid Storage Memory card - SanDisk Ultra</a>
                </h5>
                <div class="ratings mt-auto">
                  <div class="rating-outer">
                    <div class="rating-inner"></div>
                  </div>
                  <span id="no_of_reviews">(5 Reviews)</span>
                </div>
                <p class="card-text">$45.67</p>
                <a href="#" id="view_btn" class="btn btn-block">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
