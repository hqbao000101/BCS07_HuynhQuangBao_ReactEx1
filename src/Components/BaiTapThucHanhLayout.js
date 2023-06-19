import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Item from "./Item";

import React, { Component } from "react";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    let number_item = [1, 2, 3, 4];
    return (
      <>
        <Header />
        <Banner />
        <div className="container pb-5">
          <div className="row">
            {number_item.map(() => {
              return (
                <div className="col-3">
                  <Item />
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
