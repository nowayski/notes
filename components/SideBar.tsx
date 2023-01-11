import React, { FC, MouseEvent } from "react";

const SideBar: FC = () => {

  const motivationButtonHandler = (event: MouseEvent) => {
    event.preventDefault();
    alert("Motivation Button clicked")
  }
  
  const getMotivationHandler = async (url: string) => {
    const response = await fetch("/api/getMotivation",
    {
      method: 'GET',

    })
  }

  const loginHandler = (event: MouseEvent) => {
    event.preventDefault();
    
  }

  return (
    <div className="grid grid-cols-1">
      <div>
        <h1 className="font-bold text-xl"><a>Notes</a></h1>
      </div>
      <div>
        <button onClick={motivationButtonHandler} className="my-4 border-2 rounded-lg border-rose-500">Push Me For Motivation.</button>
      </div>
      <div>
        <button onClick={loginHandler} className="my-4 border-2 border-rose-500 p-1">Login</button>
      </div>
    </div>
  );
};

export default SideBar;
