import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="banner bg-light p-5 my-5">
            <h1>A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, sunt
              possimus nemo libero culpa modi. Perferendis rerum quis rem,
              dolores iure accusantium, esse pariatur quam dolorem at id ab
              assumenda nisi est ullam optio fugit, deserunt atque laborum iusto
              facere! Incidunt aut veniam et id eos vero, sed perspiciatis
              voluptas nam ipsa totam dolor. Sunt vel, dolor sed odio aspernatur
              error voluptas sit officia! Veritatis dicta adipisci
              exercitationem molestias sapiente magnam perferendis, atque
              perspiciatis quas rerum. Natus ea vel id asperiores nulla veniam
              minima cumque reiciendis necessitatibus veritatis odio repellat
              fugit qui debitis, quam placeat aliquid, non minus consectetur
              ipsum.
            </p>
            <button className="btn btn-primary px-3 py-2">Call to action!</button>
          </div>
        </div>
      </>
    );
  }
}
