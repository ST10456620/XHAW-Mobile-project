import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../../pages/home";
import StackNavigation from "../StackNav/Stack";
import Profile from "./Profile";
import enroll from "../../pages/enroll";

{/* Drawer navigation*/}
type drawerType={
    Home: undefined;
    Profile: undefined;
    SignOut: undefined;
    Enroll: undefined; 
}
const Drawer = createDrawerNavigator<drawerType>();

const DrawerNavigation = () => {
  return (
   <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Profile" component={Profile} options={{drawerLabel: "Contact us"}}/>
        <Drawer.Screen name="Enroll" component={enroll} options={{drawerLabel: "Enroll now"}}/>
        <Drawer.Screen name="SignOut" component={StackNavigation} />
 
   </Drawer.Navigator>
  )
}

export default DrawerNavigation