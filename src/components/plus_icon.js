import React from "react";

const PlusIcon = (props) => {


  function generateId(){
    const timestamp = Date.now();
    const random = Math.random() * (10**18);
    const retId = timestamp + 'fg' + random.toFixed(0);
    console.log(retId);
    return retId;
  }


  function initializeUpd(){
    const updItems = [...(props.subObjItems), generateId()];
    props.onAdd(updItems);
  }

  return (
    <>
      <div style={{display:props.style}}>
        <svg
          style={{cursor:"pointer"}}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-square"
          viewBox="0 0 16 16"
          onClick={(e) => {
            console.log("delete icon clicked "+e)
            initializeUpd();
          }}
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </div>
    </>
  );
};

export default PlusIcon;
