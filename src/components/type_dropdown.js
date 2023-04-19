import React, { useEffect, useState } from "react";

const TypeDropdown = (props) => {

  const [selectedType, setType] = useState("String");

  useEffect(()=>{
    console.log(selectedType);
    props.iconFlag(selectedType);
  },[selectedType]);

  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedType}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item active" href="#" value={selectedType} onClick={(evt)=>{setType("String")}}>
              String
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" value={selectedType} onClick={(evt)=>{setType("Number")}}>
              Number
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" value={selectedType} onClick={(evt)=>{setType("Boolean")}}>
              Boolean
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" value={selectedType} onClick={(evt)=>{setType("Object")}}>
              Object
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TypeDropdown;
