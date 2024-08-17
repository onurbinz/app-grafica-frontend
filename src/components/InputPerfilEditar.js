import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native"
import { useNavigation } from '@react-navigation/native';

import { ClientContext } from "../contexts/clientContext";
import Icon from 'react-native-vector-icons/FontAwesome';

import MaskInput, { Masks } from "react-native-mask-input";

const InputPerfilEditar = props => {
  const navigation = useNavigation()

  const [typeMask, setTypeMask] = useState(null)

  const { editClient } = useContext(ClientContext)

  const dadosDoCampo = {
    label: props.label,
    field: props.field
  }
  
  useEffect(() => {
    switch (props.field) {
      case "cpf":
        setTypeMask(Masks.BRL_CPF)
        break
      case "cep":
        setTypeMask([/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/])
        break
      default:
        setTypeMask(null)
    }
  }, [])



  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PerfilEditarCampo', dadosDoCampo)}
    >
      <View style={styles.viewField}>
        <Text style={styles.textBold}>{props.label}</Text>
        <MaskInput
          style={styles.input}
          value={editClient[props.field]}
          mask={typeMask}
          editable={false}
        />
        <Icon
          name="arrow-right"
          size={16}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default InputPerfilEditar