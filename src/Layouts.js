import React from "react";
import { Link, Outlet } from "react-router-dom";


const Layouts = () => {
  
  return (
    <div style={{ display: "flex" }}>
      <h1>Book keeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">invoices</Link>
        |<Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Layouts;
