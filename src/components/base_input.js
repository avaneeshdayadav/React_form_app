import React, { useEffect, useState } from "react";
import DeleteIcon from "./delete_icon";
import ReqSwitch from "./required_switch";
import TypeDropdown from "./type_dropdown";
import ObjectNameInp from "./object_name_input";
import PlusIcon from "./plus_icon";
import SubObj from "./subObject";
import "../App.css";

const BaseInput = (props) => {
  const [plusIconFlag, setPlusFlag] = useState("none");
  const [subObjs, setSubObjs] = useState([]);

  function changePlusIconFlag(selectedType) {
    if (selectedType === "Object") {
      setPlusFlag("block");
    } else {
      setSubObjs([]);
      setPlusFlag("none");
    }
  }

  function addSubObj(newSubObj) {
    setSubObjs(newSubObj);
  }

  return (
    <>
      <div className="card hover-effect" style={{ border: "1px solid white"}}>
        <div className="row base-comp">
          <div className="col-6 left-half">
            <div style={{display:"flex", justifyContent:"flex-start"}}>
              <div style={{ textAlign: "center",width:"10%"}}>{props.index}</div>
              <div style={{ textAlign: "left", width:"45%"}}>
                <ObjectNameInp />
              </div>
              <div style={{ textAlign: "left", width:"45%"}}>
                <TypeDropdown iconFlag={changePlusIconFlag} />
              </div>
            </div>
          </div>

          <div className="col-6 right-half">
            <div style={{display:"flex", justifyContent:"flex-end"}}>
              <div style={{ width:"60%",textAlign: "left" }}>
                <ReqSwitch />
              </div>
              <div style={{ width:"20%",textAlign: "left" }}>
                <PlusIcon
                  style={plusIconFlag}
                  subObjItems={subObjs}
                  onAdd={addSubObj}
                />
              </div>
              <div style={{ width:"20%",textAlign: "center" }}>
                <DeleteIcon
                  baseInpId={props.id}
                  items={props.items}
                  onDelete={props.onDelete}
                />
              </div>
            </div>
          </div>
        </div>

        {subObjs.length == 0
          ? null
          : subObjs.map((eachSubObj) => {
              return <SubObj subObjId={eachSubObj} subObjItems={subObjs} style={plusIconFlag}/>;
            })}

      </div>
    </>
  );
};

export default BaseInput;
