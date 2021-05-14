import React from "react";
import "./Home.css";
import myimage from "./images/home.jpeg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={myimage} alt="" />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="One by One
            Ruth Ware (Author) | INSTANT NEW YORK TIMES BESTSELLER"
            price={21.0}
            rating={4}
            image="https://images-production.bookshop.org/spree/images/attachments/13629733/original/9781501188824.jpg?1620415820"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Local Woman Missing
            Mary Kubica (Author)"
            price={10.99}
            rating={3}
            image="https://images-production.bookshop.org/spree/images/attachments/13519765/original/9780778389446.jpg?1613577383"
          />
          <Product
            id="23445930"
            title="He Started It
            Samantha Downing (Author)"
            price={5.99}
            rating={5}
            image="https://images-production.bookshop.org/spree/images/attachments/13683683/original/9780451491763.jpg?1620415943"
          />
          <Product
            id="3254354345"
            title="The Kindest Lie
            Nancy Johnson (Author)"
            price={12.99}
            rating={4}
            image="https://images-production.bookshop.org/spree/images/attachments/12915531/original/Kindest_Lie_The.jpg?1594761340"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Killing It: An Entrepreneur's Guide to Keeping Your Head Without Losing Your Heart"
            price={14.98}
            rating={4}
            image="https://images-production.bookshop.org/spree/images/attachments/4916537/original/9780062475343.jpg?1587404238"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
