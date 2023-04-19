import React, { useState } from "react";
import BaseInput from "./base_input";

const SubObj = () => {
  const [subObjs, setSubObjs] = useState([generateId()]);

  function addSubObj(updItems) {
    setSubObjs(updItems);
  }

  function generateId() {
    const timestamp = Date.now();
    const random = Math.random() * 10 ** 18;
    const retId = timestamp + "fg" + random.toFixed(0);
    console.log(retId);
    return retId;
  }

  function deleteSubObj(updItems) {
    setSubObjs(updItems);
  }


  return (
    <>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-11" style={{borderLeft: "2px solid lightgrey",verticalAlign:"middle"}}>
          {subObjs.length === 0
            ? (null)
            :
            (
                subObjs.map((eachItem) => {
                  return (
                    <BaseInput
                      key={"key" + eachItem}
                      items={subObjs}
                      id={eachItem}
                      onDelete={deleteSubObj}
                      onAddSubObj={addSubObj}
                    />
                  );
                })
              )}
        </div>
      </div>
    </>
  );
};

export default SubObj;
