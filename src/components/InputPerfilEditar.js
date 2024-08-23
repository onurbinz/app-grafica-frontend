import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native"

import { ClientContext } from "../contexts/clientContext";
import { AdressContext } from "../contexts/adressContext";

import MaskInput, { Masks } from "react-native-mask-input";

const InputPerfilEditar = props => {

  useEffect(() => { 
    switch (props.field) {
      case "cpf":
        setTypeMask(Masks.BRL_CPF)
        setTypeBoard('numeric')
        break
      case "cep":
        setTypeMask([/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/])
        setTypeBoard('numeric')
        break
      case "telefone":
        setTypeMask(['+', '5', '5', ' '].concat(Masks.BRL_PHONE))
        setTypeBoard('numeric')
        break;
      default:
        setTypeMask(null)
        setTypeBoard('default')
    }
    whichTableDataFrom()
  }, [])

  const whichTableDataFrom = () => {
    if (['nome', 'cpf', 'telefone'].includes(props.field)) {
      setValue(client[props.field])
      setTable('client')
    } else {
      setValue(adress[props.field])
      setTable('adress')
    }
  }

  const [value, setValue] = useState('')
  const [table, setTable] = useState(null)
  const [typeMask, setTypeMask] = useState(null)
  const [typeBoard, setTypeBoard] = useState(null)

  const { client, setClient } = useContext(ClientContext)
  const { adress, setAdress } = useContext(AdressContext)

  const saveField = () => {
    if (table === 'client') {
      setClient((lastClient) => {
        return {
          ...lastClient,
          [props.field]: value || null
        }
      })
    } else {
      setAdress((lastAdress) => {
        return {
          ...lastAdress,
          [props.field]: value || null
        }
      })
    }
  }

  return (
    <View style={styles.viewField}>
      <Text style={styles.textBold}>{props.label}</Text>
      <MaskInput
        style={styles.input}
        value={value}
        onChangeText={(newText) => setValue(newText)}
        mask={typeMask}
        editable={true}
        keyboardType={typeBoard}
        onBlur={saveField}
      />
    </View>
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