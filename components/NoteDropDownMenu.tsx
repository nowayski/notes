import React, { FC, useState } from "react";


interface NoteDropDownMenuProps {
  id_num: number;
  deleteHandler: Function;
}

const NoteDropDownMenu: FC<NoteDropDownMenuProps> = ({id_num, deleteHandler}) => {
  const [menuVisibile, setMenuVisible] = useState<boolean>(false);

  const menuClickHandler = () => {
    setMenuVisible(!menuVisibile);
  };
  
  
  return (
    <div onClick={menuClickHandler} className="p-3 cursor-pointer">
      <figure className="w-1 h-1 bg-black my-1 rounded-full"></figure>
      <figure className="w-1 h-1 bg-black my-1 rounded-full"></figure>
      <figure className="w-1 h-1 bg-black my-1 rounded-full"></figure>

      {menuVisibile ? (
        <ul className="absolute bg-white border p-2">
          <li className="my-2">Assign Label</li>
          <li className="my-2">Change Colour</li>
          <li className="my-2"><button onClick={() => deleteHandler(id_num)}>Delete Item</button></li>
          <li className="my-2">Assign Label</li>
        </ul>
      ) : null}
    </div>
  );
};

export default NoteDropDownMenu;
