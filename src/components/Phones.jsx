import React from "react";
import { Link, useLoaderData } from "react-router";

const Phones = () => {
  const phonesData = useLoaderData();
  return (
    <div className="text-center">
      <h2>Phones: {phonesData.length}</h2>
      {phonesData.map((phone) => (
        <li key={phone.id}>
          <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phones;
