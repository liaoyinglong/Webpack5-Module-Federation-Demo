import React from "react";
import NewsList from "./NewsList";
import RemoteSlides from "app1/Slides";

const App = () => (
  <div>
    <h2 style={{ textAlign: "center" }}>
      App 2, Remote Slides, Local NewsList
    </h2>
    <RemoteSlides />
    <NewsList />
  </div>
);

export default App;
