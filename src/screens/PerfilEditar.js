// appearance
import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native"
import { Icon, Input } from "react-native-elements"

// context
import { ClientContext } from "../contexts/clientContext"
import { AdressContext } from "../contexts/adressContext"

// components
import InputPerfilEditar from "../components/InputPerfilEditar"

// integration
import axios from "axios"
const API_URL = process.env.EXPO_PUBLIC_API_URL

const fotoPerfil = require('./../../assets/imgs/perfil/eu_na_bis.jpg')


const PerfilEditar = props => {

  const { adress } = useContext(AdressContext)
  const { client } = useContext(ClientContext)

  const save = () => {
    saveUpdatedClient()
    props.navigation.navigate('Perfil')
  }

  const saveUpdatedClient = async () => {
    try {
      await axios.put(`${API_URL}/api/clientes/${client.id}`, client)
    } catch (err) {
      console.error(err.response.data);
    }
  }

  console.log("PerfilEditar client", client);

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={styles.container}>

          <View style={styles.containerImg}>
            <Image source={fotoPerfil} style={styles.img} />
            <Icon name="image-edit" type="material-community" size={30} style={styles.editImage} />
          </View>
          <InputPerfilEditar label="Nome:" field="nome" />
          <InputPerfilEditar label="Telefone:" field="telefone" />
          <InputPerfilEditar label="CPF:" field="cpf" />
          <TouchableOpacity
            onPress={() => { props.navigation.navigate('PerfilEditarEndereco', { enderecoId: client.enderecoId, clientId: client.id }) }}
          >
            <View style={styles.viewField}>
              <Text style={styles.textBold}>Adicionar endereço </Text>
              <Icon
                name="add-circle"
                color={'green'}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerSave}
            onPress={save}
          >
            <Text style={styles.save}>Salvar</Text>
            <Icon name="done" />
          </TouchableOpacity>
        </View >
      </ScrollView>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerSave: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: (Dimensions.get('window').width - 60) / 2,
    backgroundColor: '#63b620',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 40,
    flexDirection: 'row'
  },
  save: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginRight: 10
  },
  editImage: {
    marginLeft: 20
  },
  scrollStyle: {
    height: '100%'
  },
  viewField: {
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    padding: 10,
    width: Dimensions.get('window').width - 60,
    marginTop: 16,
    overflow: 'hidden',
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBold: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16
  },
})


export default PerfilEditar