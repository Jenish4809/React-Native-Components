import { registerRootComponent } from "expo";

import { form } from "./form";
import App, { useEff } from "./App";
import { image } from "./image";
import Student, { sectionli } from "./sectionlis";
import { Responsive, Toggle } from "./toggle";
import { TouchHigh, toggle } from "./toggleswitch";
import { Drawer, Indicator, Radio, press } from "./drawer";
import { DialogBox } from "./dialogbox";
import { Status } from "./status";

registerRootComponent(Status);
