import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import SelectLocal from './pages/SelectLocal';
import NewEvent from './pages/NewEvent';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Signin,
      Main,
      Signup,
      SelectLocal,
      NewEvent
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
