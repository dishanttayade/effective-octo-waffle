import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const refreshPage = ()=>{
    window.location.reload();
    window.location.href='/'
 }

  return (
    <div className="header">
      <Link to="/quizapp" className="title">
        Intuitive Quiz Hub
      </Link>
      <Link to="/" className="btn" onClick={refreshPage}>
        Open Classroom
      </Link>
      {/* <a onClick={() => {window.location.href='/'}} className="btn">Open Classroom .</a> */}
      <hr className="divider" />
    </div>
  );
};

export default Header;
