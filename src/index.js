import React from "react";
import { createApp } from "vue";
import ReactDOM from "react-dom";
import ReactApp from "./App";
import VueApp from "./App.vue";

ReactDOM.render(<ReactApp />, document.getElementById("react-app"));

const app = createApp(VueApp);
app.mount("#vue-app");
