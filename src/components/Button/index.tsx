import React from "react";

function AddCard() {
  const buttonHandler = () => {
    console.log('cliked')
  }
  return (
    <>
    <div className="text-center buttom-0">
        <button className= "bg-green text-white py-2 px-4 rounded w-32 h-10 text-center" onClick={buttonHandler}> Add Card </button>
    </div>
    </>
  );
}

export default AddCard
