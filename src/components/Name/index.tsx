import React from "react";
import profiles from "../../data/profiles.json"

type NameParams = {
  firstName : string;
  lastName : string;
};

export default function Name({ firstName, lastName }: NameParams) {
  return (
    <>
      <span className="text-base font-black uppercase">{lastName}</span>
      <span className="text-sm font-extrabold">{firstName}</span>

    </>
  );
}
