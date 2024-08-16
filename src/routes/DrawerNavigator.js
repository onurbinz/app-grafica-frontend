import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Produtos from "../screens/Produtos";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator 
      initialRouteName="Produtos"
      screenOptions={{ 
        swipeEnabled: false,
        headerTitleStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: 22
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Produtos"
        component={Produtos}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
