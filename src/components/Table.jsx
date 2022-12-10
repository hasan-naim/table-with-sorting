import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

function Table() {
  const [data, setData] = useState([]);
  const [tableHeading, setTableHeading] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const result = data ? Object.keys(data[0]) : "";
      setTableHeading(result);
    }
  }, [data]);
  //   ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address', 'airport code', 'time', 'status', 'mobile', 'area', 'show', 'edit']

  return (
    <div className="flex flex-col w-[98%] h-[95vh] overflow-y-auto">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 ">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  {tableHeading &&
                    tableHeading.map((th, i) => {
                      return <TableHead text={th} key={i} />;
                    })}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((obj) => <TableRow key={obj.id} info={obj} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
