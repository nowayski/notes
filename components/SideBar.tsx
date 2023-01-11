import React, { FC } from "react";

const SideBar: FC = () => {

  const getMotivationHandler = async (url: string) => {
    const response = await fetch("/api/getMotivation",
    {
      method: 'GET',

    })
  }

  return (
    <div className="grid grid-cols-1">
      <div>
        <h1 className="font-bold text-xl"><a>Notes</a></h1>
      </div>
      <div>
        <button onClick={getMotivationHandler} className="my-4 border-2 rounded-lg border-rose-500">Push Me For Motivation.</button>
      </div>
    </div>
  );
};

export default SideBar;
