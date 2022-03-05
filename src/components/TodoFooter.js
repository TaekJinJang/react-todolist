import React from "react";
import { FaHome } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
function TodoFooter() {
  const history = useHistory();

  return (
    <div className="footer_bar">
      <div className="f_con home">
        <span className="menus" onClick={() => history.push("/home")}>
          <FaHome size={35} />
        </span>
      </div>
      <div className="f_con">
        <span className="menus" onClick={() => history.push("/calendar")}>
          <BsFillCalendarCheckFill size={30} />
        </span>
      </div>
    </div>
  );
}
export default TodoFooter;
