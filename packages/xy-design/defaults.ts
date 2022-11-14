import Components from "./component";
import type { App, Plugin } from "vue-demi";

function makeInstaller(components: Plugin[] = []) {
  const install = (app: App, options?: object) => {
    components.forEach((c) => app.use(c));
  };

  return {
    install
  };
}

export default makeInstaller([...Components]);
