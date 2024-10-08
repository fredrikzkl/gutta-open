import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import Header from "../components/Header";

import { FridayProgram, SaturdayProgram, SundayProgram } from "~/components/Programs";
import PageBody from "~/components/PageBody";

export const meta: MetaFunction = () => {
  return [
    { title: "Gutta Open" },
    { name: "description", content: "Velkommen til Gutta open" },
  ];
};


const tab_key = "last-visited-tab";

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  const tabOnClick = (index : number) => {
    setActiveTab(index);
    window.localStorage.setItem(tab_key, index.toString());
  }

  useEffect(() => {
    let lastVisitedTab = window.localStorage.getItem(tab_key);
    if (!lastVisitedTab || lastVisitedTab === '' || lastVisitedTab === 'null') {
      window.localStorage.setItem(tab_key, '0');
    }
    setActiveTab(Number(lastVisitedTab));
  }, []);

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
    <PageBody title={""}>
      <div role="tablist" className="tabs tabs-boxed tabs-lg mb-12">
        <a role="tab" className={`tab ${activeTab == 0 && 'tab-active'}`} onClick={() => tabOnClick(0)}>Fredag</a>
        <a role="tab" className={`tab ${activeTab == 1 && 'tab-active'}`} onClick={() => tabOnClick(1)}>Lørdag</a>
        <a role="tab" className={`tab ${activeTab == 2 && 'tab-active'}`} onClick={() => tabOnClick(2)}>Søndag</a>
      </div>
      {GetDailyProgram()}
    </PageBody>
  );
}
