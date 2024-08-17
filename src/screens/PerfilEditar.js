import React, { useContext } from "react"
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
import { Icon } from "react-native-elements"

import { ClientContext } from "../contexts/clientContext"

import InputPerfilEditar from "../components/InputPerfilEditar"

const fotoPerfil = require('./../../assets/imgs/perfil/eu_na_bis.jpg')


const PerfilEditar = props => {

  const { setClient, editClient } = useContext(ClientContext)

  const saveUpdatedClient = () => {
    setClient(editClient)
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.containerImg}>
            <Image source={fotoPerfil} style={styles.img} />
            <Icon name="image-edit" type="material-community" size={30} style={styles.editImage} />
          </View>
          <InputPerfilEditar label="Nome:" field="nome" />
          <InputPerfilEditar label="CPF:" field="cpf" />
          <InputPerfilEditar label="Cidade:" field="cidade" />
          <InputPerfilEditar label="UF:" field="uf" />
          <InputPerfilEditar label="Rua:" field="rua" />
          <InputPerfilEditar label="Numero:" field="numero" />
          <InputPerfilEditar label="Bairro:" field="bairro" />
          <InputPerfilEditar label="CEP:" field="cep" />
          <InputPerfilEditar label="Complemento:" field="complemento" />

          <TouchableOpacity
            style={styles.containerSave}
            onPress={() => {
              saveUpdatedClient()
              props.navigation.navigate('Perfil')
            }}
          >
            <Text style={styles.save}>Salvar</Text>
            <Icon name="done"/>
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
    backgroundColor: '#FDFDFD'
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
    width: (Dimensions.get('window').width - 60) / 3,
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
  }
})


export default PerfilEditar