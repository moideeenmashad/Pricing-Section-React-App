import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <div>
      {/* <!-- Pricing section--> */}
      <div class="container p-4">
        <div class="head text-center text-light mt-5 mb-5">
          <h5 class="mb-3"></h5>
          <h1 class="heading mb-3">
            Choose the plan that fits <br />
            your needs.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            molestias <br />
            provident fuga tenetur ducimus labore ex rem
          </p>
        </div>
        <div class="row justify-content-center g-3">
          <div class="col-10 col-sm-10 col-md-6 col-lg-4 p-3">
            <div class="card p-4">
              <h6 class="mt-2 mb-3">
                <span class="badge bg-dark text-light badge-secondary">
                  Personal
                </span>
              </h6>
              <div class="card-text text-light">
                <span class="text-price mb-3">Free</span>
                <p class="small mb-3">
                  To discover our products and its features
                </p>
                <div class="hr mb-3"></div>
                <ul class="fa-ul mb-5">
                  <li>
                    <span class="fa-li">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Unlimited Projects
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Share with 5 team members
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Sync across devices
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    20GB individual data each user
                  </li>
                </ul>
              </div>
              <button class="btn btn-secondary text-light">Learn more</button>
            </div>
          </div>
          <div class="col-10 col-sm-10 col-md-6 col-lg-4 p-3">
            <div class="card p-4" id="primary-card">
              <h6 class="mt-2 mb-3">
                <span class="badge bg-dark text-primary badge-primary">
                  Personal Pro
                </span>
              </h6>
              <div class="card-text text-light">
                <span class="text-price emb-3">$20</span>{" "}
                <span class="small">per month</span>
                <p class="small mb-3">
                  The best option for individual notetakers
                </p>
                <div class="hr mb-3"></div>
                <ul class="fa-ul mb-5">
                  <li>
                    <span class="fa-li text-primary">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Unlimited Projects
                  </li>
                  <li>
                    <span class="fa-li text-primary">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Share with 25 team members
                  </li>
                  <li>
                    <span class="fa-li text-primary">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Sync across devices
                  </li>
                  <li>
                    <span class="fa-li text-primary">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    50GB individual data each user
                  </li>
                </ul>
              </div>
              <button class="btn btn-primary fw-normal">Try now</button>
            </div>
          </div>
          <div class="col-10 col-sm-10 col-md-6 col-lg-4 p-3">
            <div class="card p-4">
              <h6 class="mt-2 mb-3">
                <span class="badge bg-dark badge-team">Team</span>
              </h6>
              <div class="card-text text-light">
                <span class="text-price mb-3">$50</span>{" "}
                <span class="small">per month</span>
                <p class="small mb-3">best suited for larger notetakers</p>
                <div class="hr mb-3"></div>
                <ul class="fa-ul mb-5">
                  <li>
                    <span class="fa-li text-team">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Unlimited Projects
                  </li>
                  <li>
                    <span class="fa-li text-team">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Unlimeted team members
                  </li>
                  <li>
                    <span class="fa-li text-team">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Sync across devices
                  </li>
                  <li>
                    <span class="fa-li text-team">
                      <i class="fa-regular fa-circle-check"></i>
                    </span>
                    Unlimeted individual data each user
                  </li>
                </ul>
              </div>
              <button class="btn btn-light">Try now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
