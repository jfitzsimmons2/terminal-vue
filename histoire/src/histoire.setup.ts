import "terminalvue/style/style.scss";
import "./terminal-custom.css";
import "./terminal.css";

//import '../../components/navigation/dist/style.css'

import { defineSetupVue3 } from "@histoire/plugin-vue";

export const setupVue3 = defineSetupVue3(({ app }) => {
  console.log("histoire.setup.ts");
});
