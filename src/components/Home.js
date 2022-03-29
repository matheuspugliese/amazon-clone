import React from "react";
import "./Home.css";
import Products from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Products
          id="123456798"
          title="The Lean Startup: How constant innovation creates"
          price={11.9}
          rating={5}
          image="https://www.criptofacil.com/wp-content/uploads/2021/12/bored-ape-yatch-club-superam-cryptopunks-pela-primeira-vez.jpg"
        />
        <Products
          id="123456798"
          title="The Lean Startup: How constant innovation creates"
          price={11.9}
          rating={5}
          image="https://www.criptofacil.com/wp-content/uploads/2021/12/bored-ape-yatch-club-superam-cryptopunks-pela-primeira-vez.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="123456798"
          title="The Lean Startup: How constant innovation creates"
          price={11.9}
          rating={5}
          image="https://www.criptofacil.com/wp-content/uploads/2021/12/bored-ape-yatch-club-superam-cryptopunks-pela-primeira-vez.jpg"
        />{" "}
        <Products
          id="123456798"
          title="The Lean Startup: How constant innovation creates"
          price={11.9}
          rating={5}
          image="https://www.criptofacil.com/wp-content/uploads/2021/12/bored-ape-yatch-club-superam-cryptopunks-pela-primeira-vez.jpg"
        />{" "}
        <Products
          id="123456798"
          title="The Lean Startup: How constant innovation creates"
          price={11.9}
          rating={5}
          image="https://www.criptofacil.com/wp-content/uploads/2021/12/bored-ape-yatch-club-superam-cryptopunks-pela-primeira-vez.jpg"
        />
      </div>
      <div className="home__row">
        <Products
            id="123456798"
            title="The Lean Startup: How constant innovation creates"
            price={11.9}
            rating={5}
            image="https://www.criptofacil.com/wp-content/uploads/2021/12/bored-ape-yatch-club-superam-cryptopunks-pela-primeira-vez.jpg"
          />
      </div>
    </div>
  );
}

export default Home;
