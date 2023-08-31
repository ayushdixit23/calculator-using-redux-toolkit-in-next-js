import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.counter.value);
  return <div className="bg-blue-600 text-2xl p-2 px-5 text-white">{count}</div>;
};

export default Count;
