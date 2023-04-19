import React, { useEffect, useState } from "react";
import BaseInput from "./base_input";

const MainCard = (props) => {
  const [items, setItem] = useState([]);
  const [count, setCount] = useState(0);

  function setItemUtil() {
    const uniqueId = generateId();
    setItem([...items, uniqueId]);
  }

  function generateId() {
    const timestamp = Date.now();
    const random = Math.random() * 10 ** 18;
    const retId = timestamp + "fg" + random.toFixed(0);
    console.log(retId);
    return retId;
  }

  function deleteBaseInp(updItems) {
    setItem(updItems);
  }

  return (
    <>
      <div className="card w-66 mb-3">
        <div className="card-body">
          <div className="row">
            <div className="cart-title col-9" style={{ textAlign: "center"}}>
              <h5>Field Name And Type</h5>
            </div>
            <div className="col-3" style={{ textAlign: "right" }}>
              <svg
                style={{ cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-square"
                viewBox="0 0 16 16"
                onClick={setItemUtil}
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-12">
              {items.length === 0 ? (
                <div>Create some objects by using add icon on top right.</div>
              ) : (
                items.map((eachItem, index) => {
                  return (
                    <>
                      <div className="row">
                        <div className="col-12">
                          <BaseInput
                            key={"key" + eachItem}
                            items={items}
                            id={eachItem}
                            onDelete={deleteBaseInp}
                            index={index+1}
                          />
                        </div>
                      </div>
                    </>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
