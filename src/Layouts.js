import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layouts = () => {
  const storeStateTolocal = useSelector((state) => state.counter);
  return (
    <div >
       <div style={{marginLeft:"40px"}}>
      <h1 style={{}}>Book keeper</h1>
      {/* My State : {storeStateTolocal} */}
     
        <nav
          style={{
            // borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/invoices">invoices</Link>|
          <Link to="/expenses">Expenses</Link>
        </nav>
      </div>
      <div style={{ borderBottom: "solid 1px" }}></div>
      <Outlet />
    </div>
  );
};

export default Layouts;
