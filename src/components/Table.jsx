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

  /// sorting

  const handleNameSort = (sortWay) => {
    if (sortWay === "asc") {
      const newSortedArr = [...data].sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
      setData(newSortedArr);
    } else if (sortWay === "desc") {
      const newSortedArr = [...data].sort((a, b) =>
        b.first_name.localeCompare(a.first_name)
      );
      setData(newSortedArr);
    }
  };
  const handleLastNameSort = (sortWay) => {
    if (sortWay === "asc") {
      const newSortedArr = [...data].sort((a, b) =>
        a.last_name.localeCompare(b.last_name)
      );
      setData(newSortedArr);
    } else if (sortWay === "desc") {
      const newSortedArr = [...data].sort((a, b) =>
        b.last_name.localeCompare(a.last_name)
      );
      setData(newSortedArr);
    }
  };

  /// delete

  const handleDelete = (id) => {
    const newData = data.filter((dt) => dt.id !== id);
    setData(newData);
  };

  return (
    <div className="flex flex-col w-[98%] h-[95vh] overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 ">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <TableHead text={"ID"} />
                  <TableHead text={"First Name"} handleSort={handleNameSort} />
                  <TableHead
                    text={"Last Name"}
                    handleSort={handleLastNameSort}
                  />
                  <TableHead text={"Email"} />
                  <TableHead text={"Gender"} />
                  <TableHead text={"IP Address"} />
                  <TableHead text={"Airport Code"} />
                  <TableHead text={"Time"} />
                  <TableHead text={"Status"} />
                  <TableHead text={"mobile"} />
                  <TableHead text={"area"} />
                  <TableHead text={"show"} />
                  <TableHead text={"edit"} />
                  <TableHead text={"Delete"} />
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((obj) => (
                    <TableRow
                      key={obj.id}
                      info={obj}
                      handleDelete={handleDelete}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
