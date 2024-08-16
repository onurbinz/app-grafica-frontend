import React, { useContext, use, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Icon } from "react-native-elements";
import { ClientContext } from "../contexts/clientContext";

const fotoPerfil = require('./../../assets/imgs/perfil/eu_na_bis.jpg')

const Perfil = props => {

  const { client } = useContext(ClientContext)
  
  const data = {
    name: client.nome,
    cpf: client.cpf,
    adress: {
      city: client.cidade,
      uf: client.uf,
      street: client.rua,
      neighborhood: client.bairro,
      number: client.numero,
      cep: client.cep,
      complement: client.complemento,
    }
  }

  return (
    <View style={styles.container}>
      <Image source={fotoPerfil} style={styles.img} />

      <Text style={styles.viewField}> <Text style={styles.textBold}>Nome: </Text>
        {data.name}
      </Text>
      <Text style={styles.viewField}> <Text style={styles.textBold}>CPF: </Text>
        {data.cpf}
      </Text>

      <View style={styles.viewField}>
        <Text style={styles.textBold}>Endereço de entrega:</Text>
        <View style={styles.endereco}>
          <Text ><Text style={styles.textBold}>Cidade: </Text>{data.adress.city}</Text>
          <Text><Text style={styles.textBold}>UF: </Text>{data.adress.uf}</Text>
          <Text><Text style={styles.textBold}>Rua: </Text>{data.adress.street}</Text>
          <Text><Text style={styles.textBold}>Bairro: </Text>{data.adress.neighborhood}</Text>
          <Text><Text style={styles.textBold}>Numero: </Text>{data.adress.number}</Text>
          <Text><Text style={styles.textBold}>CEP: </Text>{data.adress.cep}</Text>
          <Text><Text style={styles.textBold}>Complemento: </Text>{data.adress.complement}</Text>
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.containerLogout}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text style={styles.logout}>Sair</Text>
        <Icon name="logout"/>
      </TouchableOpacity>
    </View>
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
    height: 200,
    width: 200,
    borderRadius: 100
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
  },
  textBold: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16
  },
  endereco: {
    marginTop: 8,
    marginLeft: 16,
  },
  containerLogout: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: (Dimensions.get('window').width - 60) / 3,
    backgroundColor: '#FF8686',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 40,
    flexDirection: 'row'
  },
  logout: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginRight: 10
  }
})

export default Perfil