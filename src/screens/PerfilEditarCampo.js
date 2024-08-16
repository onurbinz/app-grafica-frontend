import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native"
import { Icon } from "react-native-elements";

import { ClientContext } from "../contexts/clientContext";

const InputPerfilEditar = props => {
  const label = props.route.params.label
  const field = props.route.params.field

  const { client, editClient, setEditClient } = useContext(ClientContext)

  const [text, setText] = useState(client[field])

  const updateEditClient = () => {
    setEditClient(client => {
      return {
        ...client,
        [field]: text ? text.trim() : null
      }
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.viewField}>
        <Text style={styles.textBold}>{label}</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(newText) => setText(newText)}
        />
      </View>
      <TouchableOpacity
        style={styles.containerSave}
        onPress={() => {
          updateEditClient()
          props.navigation.navigate('PerfilEditar')
        }}
      >
        <Text style={styles.save}>Salvar</Text>
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
    width: (Dimensions.get('window').width - 60) / 3,
    backgroundColor: '#63b620',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 40,
    flexDirection: 'row'
  },
})

export default InputPerfilEditar