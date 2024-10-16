import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//entry CONTAINER
import {NavigationContainer} from "@react-navigation/native"
import {CardStyleInterpolators,createStackNavigator} from "@react-navigation/stack"
const Stack=createStackNavigator()
//Screens
import Home from './Screens/Home';
import NoteEditor from './Screens/NoteEditor';
import Search from './Screens/Search';


export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Home' options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} component={Home}/>
    <Stack.Screen name='Editor'  options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} component={NoteEditor}/>
    <Stack.Screen name='Query'   options={{cardStyleInterpolator:CardStyleInterpolators.forBottomSheetAndroid}} component={Search}/>

  </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
