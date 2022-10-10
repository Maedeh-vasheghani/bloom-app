import React from "react";
import AddCard from "../Button";
import Card from "../AddCard";

function Cardcontainer() {
  return (
    <div className="p-2.5 bg-white flex flex-col gap-2.5 h-auto min-w-[271px] rounded-[5px] shadow-cardcontainer">
      <Card />
    </div>
  );
}

export default Cardcontainer;
