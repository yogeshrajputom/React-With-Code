import React from "react";

function Card(props) {
  console.log(props.userName, props.btn);

  return (
    <>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="img1.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {props.userName}
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
        <button>{props.btn}</button>
      </div>
    </>
  );
}


export default Card;
