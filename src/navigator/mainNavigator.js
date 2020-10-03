import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps123987Navigator from '../features/Maps123987/navigator';
import Add-Item123986Navigator from '../features/Add-Item123986/navigator';
import Maps123982Navigator from '../features/Maps123982/navigator';
import UserProfile123978Navigator from '../features/UserProfile123978/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps123987: { screen: Maps123987Navigator },
Add-Item123986: { screen: Add-Item123986Navigator },
Maps123982: { screen: Maps123982Navigator },
UserProfile123978: { screen: UserProfile123978Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
