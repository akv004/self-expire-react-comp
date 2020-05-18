import React, { Children } from "react";
import "./styles.css";
import { SelfDestruct } from "./Expire";
import { Hello } from "./Hello";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SelfDestruct expirationDate={new Date(Date.now() + 2000)}>
        <div>hello</div>
      </SelfDestruct>
      <SelfDestruct expirationDate={new Date(Date.now() + 4000)}>
        <Hello />
      </SelfDestruct>
    </div>
  );
}
