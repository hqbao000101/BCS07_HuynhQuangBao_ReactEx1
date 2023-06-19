import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="border border-3">
        <div className="card__image">
          <img src="https://picsum.photos/200" alt="" className="w-100" />
        </div>
        <div className="card__content p-3 text-center">
          <h5>Card title</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            nam ex ipsum voluptas molestias qui ipsa. Ipsam sint, possimus
            similique deleniti reiciendis voluptates eveniet at?
          </p>
        </div>
        <div className="card__foter bg-light text-center py-3">
          <button className="btn btn-primary py-2 px-3">Find Out More!</button>
        </div>
      </div>
    );
  }
}
