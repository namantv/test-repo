import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layouts from "./Layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./routes/invoices";
import Expencess from "./routes/expencess";
import Invoice from "./routes/invoice";
import { Provider } from "react-redux";
import store from "../src/store/store";

ReactDOM.render(
  //
  <React.StrictMode>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Provider store={store}><Layouts /></Provider>}>
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<Invoice />} />
              <Route
                index
                element={
                  <main
                    style={{ padding: "1rem", backgroundColor: "antiquewhite" }}
                  >
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There`s nothing here!</p>
                  </main>
                }
              />
            </Route>
            <Route path="expenses" element={<Expencess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
