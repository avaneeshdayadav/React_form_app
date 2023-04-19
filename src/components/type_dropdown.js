import React, { useEffect, useState } from "react";

const TypeDropdown = (props) => {

  const [selectedType, setType] = useState("String");

  useEffect(() => {
    console.log(selectedType);
    props.iconFlag(selectedType);
  }, [selectedType]);

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
            <button className="dropdown-item active" value={selectedType} onClick={(evt) => { setType("String") }}>
              String
            </button>
          </li>
          <li>
            <button className="dropdown-item" value={selectedType} onClick={(evt) => { setType("Number") }}>
              Number
            </button>
          </li>
          <li>
            <button className="dropdown-item" value={selectedType} onClick={(evt) => { setType("Boolean") }}>
              Boolean
            </button>
          </li>
          <li>
            <button className="dropdown-item" value={selectedType} onClick={(evt) => { setType("Object") }}>
              Object
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TypeDropdown;
