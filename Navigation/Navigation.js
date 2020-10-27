import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import SignUp from '../Components/SignUp'
import Login from '../Components/Login'
import ListBar from '../Components/ListBar'
import Evenements from '../Components/Evenements'
import DetailBar from '../Components/DetailBar'
import Comments from '../Components/Comments'
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function LogNav(){
  return (

    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}}  />
    </Stack.Navigator>
  );
}
function SignNav(){
  return (

    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} options={{title: 'SignUp'}} />
    </Stack.Navigator>
  );
}

function BarNav() {

  return (

    <Stack.Navigator>
      <Stack.Screen name="ListBar" component={ListBar} options={{title: 'Bars'}} />
      <Stack.Screen name="TabDetail" component={EventBarNav} options={{title: 'Detail'}}  />
    </Stack.Navigator>
  );
}

function EventBarNav(props){
  return (

      <Tab.Navigator
      screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Detail') {
                iconName = focused ? 'ios-beer': 'md-beer';
              }
              else if (route.name === 'Event') {
                iconName = focused ? 'ios-calendar' : 'md-calendar';
              }
              else if (route.name === 'Comments') {
                iconName = focused ? 'ios-text' : 'md-text';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle:{fontSize:14},
          }}
            >
          <Tab.Screen name="Detail" component={DetailBar} initialParams={ props.route.params } />
          <Tab.Screen name="Event" component={Evenements} initialParams={ props.route.params }  />
          <Tab.Screen name="Comments" component={Comments} initialParams={ props.route.params }  />

      </Tab.Navigator>

  )
}

function RightBar() {

  return (

      <Drawer.Navigator >
        <Drawer.Screen name="List" component={BarNav} options={{title: 'List'}} />
        <Drawer.Screen name="SignUp" component={SignNav} options={{title: 'SignUp'}} />
        <Drawer.Screen name="Login" component={LogNav} options={{title: 'Login'}} />

      </Drawer.Navigator>

  );
}

export default RightBar;
