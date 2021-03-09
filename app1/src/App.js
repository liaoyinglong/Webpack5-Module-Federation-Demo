import React from "react";
import Slides from "./Slides";
import RemoteNewsList from "app2/NewsList";

const App = () => (
  <div>
    <h2 style={{ textAlign: "center" }}>App1, Local Slides, Remote NewsList</h2>
    <Slides />
    <RemoteNewsList />
  </div>
);

export default App;
