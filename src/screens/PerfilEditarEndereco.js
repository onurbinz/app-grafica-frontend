import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { Icon } from "react-native-elements";

import { AdressContext } from "../contexts/adressContext";

import InputPerfilEditar from "../components/InputPerfilEditar";
import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL

const PerfilEditarEndereco = props => {

  const { adress } = useContext(AdressContext)

  const updateAdress = () => {
    
    if (props.route.params.enderecoId) {
      try {
        axios.put(`${API_URL}/api/endereco/${props.route.params.enderecoId}`, adress)
      } catch (err) {
        console.error("nao foi possivel atualizar endereço (put)");
      }
    } else {
      try {
        axios.post(`${API_URL}/api/endereco/${props.route.params.clientId}`, adress)
      } catch (err) {
        console.error("nao foi possivel criar endereco (post)");
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputPerfilEditar label="Cidade:" field="cidade" />
      <InputPerfilEditar label="UF:" field="uf" />
      <InputPerfilEditar label="Bairro:" field="bairro" />
      <InputPerfilEditar label="Rua:" field="rua" />
      <InputPerfilEditar label="Numero:" field="numero" />
      <InputPerfilEditar label="CEP:" field="cep" />
      <InputPerfilEditar label="Complemento:" field="complemento" />
      <TouchableOpacity
        style={styles.containerSave}
        onPress={() => {
          updateAdress()
          props.navigation.navigate('PerfilEditar')
        }}
      >
        <Text style={styles.save}>Salvar endereço</Text>
        <Icon name="done" />
      </TouchableOpacity>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FDFDFD'
  },
  textBold: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16
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
    alignItems: 'center'
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontFamily: 'Poppins-Light',
    fontSize: 16,
  },
  containerSave: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: (Dimensions.get('window').width - 60) * 3 / 5,
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
})

export default PerfilEditarEndereco