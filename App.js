import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import DetailBook from './screens/DetailBook';
import FeedBooks from './screens/FeedBooks';

const Stack = createNativeStackNavigator();


export default function App(){

  return(

    <NavigationContainer>
      {/*QUAL TELA ABRE O APP*/}
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title:"Login"}}
        />

        <Stack.Screen
          name="CreateUser"
          component={CreateUser}
          options={{title:"CADASTRO"}}
        />

      </Stack.Navigator>
    </NavigationContainer>

  )
}