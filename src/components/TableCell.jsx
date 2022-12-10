import React from "react";

function TableCell({ text }) {
  if (text === "FALSE") {
    return (
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
      </td>
    );
  }
  if (text === "TRUE") {
    return (
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </td>
    );
  }

  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {text}
    </td>
  );
}

export default TableCell;
