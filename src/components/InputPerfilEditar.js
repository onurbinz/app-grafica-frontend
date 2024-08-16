import React, { useContext } from "react";
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

const InputPerfilEditar = props => {
  
  const navigation = useNavigation()
  
  const { editClient } = useContext(ClientContext)
  
  const dadosDoCampo = {
    label: props.label,
    field: props.field
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PerfilEditarCampo', dadosDoCampo)}
    >
      <View style={styles.viewField}>
        <Text style={styles.textBold}>{props.label}</Text>
        <Text style={styles.input}>
          {editClient[props.field]}
        </Text>
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