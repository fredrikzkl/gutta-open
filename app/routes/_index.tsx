import type { MetaFunction } from "@remix-run/node";

import hamburgerImg from "../images/hamburger.png";
import EventCard from "../components/EventCard";
import { useState } from "react";

import { FridayProgram, SaturdayProgram, SundayProgram } from "~/components/Programs";

export const meta: MetaFunction = () => {
  return [
    { title: "Gutta Open" },
    { name: "description", content: "Velkommen til Gutta open" },
  ];
};

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  const tabOnClick = (index : number) => {
    setActiveTab(index);
  }

  const GetDailyProgram = () => {
    switch (activeTab) {
      case 0:
        return <FridayProgram />;
      case 1:
        return <SaturdayProgram />;
      case 2:
        return <SundayProgram />;
    }
  }

  return (
    <div className="p-6">
      <div className="text-center p-10 sm:p-2 mb-2">
        <h1 className="text-5xl">Gutta Open 2024 🏆</h1>
      </div>

      <div role="tablist" className="tabs tabs-boxed tabs-lg mb-8">
        <a role="tab" className={`tab ${activeTab == 0 && 'tab-active'}`} onClick={() => tabOnClick(0)}>Fredag</a>
        <a role="tab" className={`tab ${activeTab == 1 && 'tab-active'}`} onClick={() => tabOnClick(1)}>Lørdag</a>
        <a role="tab" className={`tab ${activeTab == 2 && 'tab-active'}`} onClick={() => tabOnClick(2)}>Søndag</a>
      </div>

      {GetDailyProgram()}
    </div>
  );
}
