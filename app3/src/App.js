import React from "react";

import RemoteSlides from "app1/Slides";
import RemoteNewsList from "app2/NewsList";

const App = () => (
  <div>
    <h2 style={{ textAlign: "center" }}>
      App 3, Remote Slides, Remote NewsList
    </h2>
    <RemoteSlides />
    <RemoteNewsList />
  </div>
);

export default App;
