import React, { useContext } from "react";
import {
  View,
  Text,
} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Icon } from 'react-native-elements';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";
import Contato from "../screens/Contato";
import Produtos from "../screens/Produtos";
import Perfil from "../screens/Perfil";
import Carrinho from "../screens/Carrinho";
import ProdutoFoco from "../screens/ProdutoFoco";

import { ClientContext } from "../contexts/clientContext"
import PerfilEditar from "../screens/PerfilEditar";
import PerfilEditarCampo from "../screens/PerfilEditarCampo";

const Stack = createStackNavigator()

const Navigator = () => {

  const { isEditing, setIsEditing } = useContext(ClientContext)

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={(props) => ({
            headerLeft: () => (
              <View style={{ flexDirection: 'row', justifyContent: "space-around", width: 150 }}>
                <Icon
                  name="cog-outline"
                  type="material-community"
                  size={30}
                  onPress={() => { }}
                />
                <Icon
                  name="bell-outline"
                  type="material-community"
                  size={30}
                  onPress={() => navigation.navigate('Notificacoes')}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', justifyContent: "space-around", width: 150 }}>
                <Icon
                  name="account-outline"
                  type="material-community"
                  size={30}
                  onPress={() => props.navigation.navigate('Perfil')}
                />
                <Icon
                  name="cart-outline"
                  type="material-community"
                  size={30}
                  onPress={() => props.navigation.navigate('Carrinho')}
                />
              </View>
            ),
            gestureEnabled: false
          })}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
        />
        <Stack.Screen
          name="ProdutosDrawer"
          component={DrawerNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ProdutoFoco"
          component={ProdutoFoco}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={ (props) => ({
              headerRight: () => (
                <Icon
                  name="square-edit-outline"
                  type="material-community"
                  size={30}
                  style={{ marginRight: 28 }}
                  onPress={() => props.navigation.navigate('PerfilEditar')}
                />
              )
            })
          }
        />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
        />
        <Stack.Screen
          name="PerfilEditar"
          component={PerfilEditar}
          options={{
            headerTitle: "Editar Perfil",
          }}
        />
        <Stack.Screen
          name="PerfilEditarCampo"
          component={PerfilEditarCampo}
          options={{
            headerTitle: "",
          }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator