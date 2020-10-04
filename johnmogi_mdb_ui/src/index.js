import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import VideoBackgroundPage from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

WebFont.load({
  google: {
    families: ["Assistant:300,400,700,sans-serif&display=swap"],
  },
});

ReactDOM.render(<VideoBackgroundPage />, document.getElementById("root"));

registerServiceWorker();
