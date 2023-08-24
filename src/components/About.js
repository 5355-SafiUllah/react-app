import React from "react";
import about from "C:/Users/MY-PC/Desktop/ReactApp/react-app/src/images/about.png";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={about} width={450} />
        </div>
        <div className="col-md-6 about-text">
          <h1>We Are ASTRAGALAXYLLC</h1>
          <p className="my-4">
            ASTRAGALAXYLLC is one of the fastest growing online stores . We
            fully understand what customers need and demand as Good Prices and
            Service. We are ready to bring all the value you look for to you. We
            offer amazing prices for all our products; how do we do this? We own
            a powerful purchasing team to source our 100% genuine and brand-new
            products globally.
            <br /> Our purchasing team builds and develops inseparable
            relationships and works closely with suppliers, who always help us
            to bring the cost of our goods down. We will make sure to give all
            the savings to you. ASTRAGALAXYLLC aims to let you shop with
            confidence and trust; we answer your inquiries quickly with
            professional product knowledge.
            <br /> We provide a trackable and reliable delivery service,
            currently shipping within, the USA. We handle all duties regarding
            processing shipments, to ensure you are worry-free from any hidden
            fees. You can also enjoy our 14 Days Return Policy and 12 months in
            house warranty on major items.
          </p>
        </div>
      </div>
    </div>
  );
}
