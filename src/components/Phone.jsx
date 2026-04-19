import React from "react";
import { useLoaderData } from "react-router";

const Phone = () => {
  const phoneData = useLoaderData();
  console.log(phoneData);
  return (
    <div className="flex flex-col mx-auto items-center">
      <h2>{phoneData.name}</h2>
      <p>{phoneData.description}</p>
      <img src={phoneData.imageUrl} alt={phoneData.name} />
    </div>
  );
};

export default Phone;
