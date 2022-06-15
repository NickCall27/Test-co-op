import { Link } from "react-router-dom";
import ROUTES from "../routes";
import React from "react";
import { getUrl } from "../helper";




const List = ({ items, dynamicUrl, dynamicKey = "id", labelKey = "title" }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item[dynamicKey]}>
          <Link as={Link} to={getUrl(dynamicUrl, dynamicKey, item[dynamicKey])}>
            {item[labelKey]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
