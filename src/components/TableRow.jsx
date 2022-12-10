import React, { useEffect, useState } from "react";
import TableCell from "./TableCell";

function TableRow({ info: data }) {
  const [keys, setKeys] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (data) {
      const result = Object.keys(data);
      setKeys(result);
    }
  }, [data]);
  console.log(data);
  console.log(keys);
  return (
    <tr
      className={`${
        clicked
          ? "bg-slate-300 hover:bg-slate-400"
          : "bg-white hover:bg-gray-200"
      } border-b transition duration-300 ease-in-out `}
      onClick={() => setClicked(!clicked)}
    >
      {keys && keys.map((key) => <TableCell text={data[key]} key={key} />)}
    </tr>
  );
}

export default TableRow;
