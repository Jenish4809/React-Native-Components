import { registerRootComponent } from "expo";

import { form } from "./form";
import App, { useEff } from "./App";
import { image } from "./image";
import Student, { sectionli } from "./sectionlis";
import { Responsive, Toggle } from "./toggle";
import { TouchHigh, toggle } from "./toggleswitch";
import { Drawer, Indicator, Radio, press } from "./drawer";
import { DialogBox, customModal } from "./dialogbox";
import { Status } from "./status";
import { AppStack } from "./stack/stacknav";
import { Navigate } from "./stack practice/navigate";
import { BottomNav, NavigateTab } from "./tabnavigation/bottomtab";
import { Home } from "./stack/second";
import DrawerNav, { Drawers } from "./drawer/drawernav";
import { ApiData } from "./Api/SimpleApi";
import { Axiosapi } from "./Api/AxiosApi";
import { Btn } from "./Api/Component";
import { PracticeApi } from "./Api/PracticeApi";
import { PostApi } from "./Api/PostApi";
import { MainScreen } from "./AsyncStoreData.js/MainScreen";
import { NavigationUser } from "./AsyncStoreData.js/NavigationUser";
import { GetImage } from "./ImagePicker";
import { SearchComponent, TextSearch } from "./Api/ApiSearch";
import ActionSheet from "react-native-actions-sheet";
import { ActionSheetCreate } from "./ActionSheet";
import DropdownComponent, { DropDownCreate } from "./DropDown";
import { UserData } from "./AsyncStoreData.js/UserData";
import { Splash } from "./AsyncStoreData.js/Splash";
import { Swipe } from "./Swipe/swiper";
import { Main } from "./ComponentsRedux/Main";
import { Provider } from "react-redux";
import store from "./ComponentsRedux/Redux/store";

const AppRedux = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

registerRootComponent(AppRedux);
