import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";

export default function Home() {
  return (
    <div>
      <div className="sidebar-pos">
        <Sidebar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}
