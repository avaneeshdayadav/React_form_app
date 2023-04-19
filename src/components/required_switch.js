import React from "react";

const ReqSwitch = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>Required</div>&nbsp;&nbsp;
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            aria-checked="false"
          />
        </div>
      </div>
    </>
  );
};


export default ReqSwitch;