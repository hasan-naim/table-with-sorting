import React from "react";

function TableHead({ text }) {
  return (
    <th
      scope="col"
      className="text-sm uppercase font-medium text-gray-900 px-6 py-4  text-center hover:bg-gray-300"
    >
      {text}
    </th>
  );
}

export default TableHead;
