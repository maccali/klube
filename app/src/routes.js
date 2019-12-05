import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NewEvent from './pages/NewEvent';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Signin,
      Main,
      Signup,
      NewEvent
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#aca6aa',
        },
        headerTintColor: '#000',
      },
    }
  )
);

export default Routes;
