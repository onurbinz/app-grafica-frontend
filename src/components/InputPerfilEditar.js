import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import cep from "cep-promise";
import cpf from "cpf";
import { ClientContext } from "../contexts/clientContext";
import { AdressContext } from "../contexts/adressContext";
import { ValidContext } from "../contexts/validationContext";

const InputPerfilEditar = props => {

  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [table, setTable] = useState(null);
  const [typeMask, setTypeMask] = useState(null);
  const [typeBoard, setTypeBoard] = useState(null);

  const { client, setClient } = useContext(ClientContext);
  const { adress, setAdress } = useContext(AdressContext);
  const { valid, setValid } = useContext(ValidContext);

  useEffect(() => {
    switch (props.field) {
      case "cpf":
        setTypeMask(Masks.BRL_CPF);
        setTypeBoard('numeric');
        break;
      case "cep":
        setTypeMask([/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]);
        setTypeBoard('numeric');
        break;
      case "telefone":
        setTypeMask(['+', '5', '5', ' '].concat(Masks.BRL_PHONE));
        setTypeBoard('numeric');
        break;
      default:
        setTypeMask(null);
        setTypeBoard('default');
    }
    whichTableDataFrom();
  }, []);

  const whichTableDataFrom = () => {
    if (['nome', 'cpf', 'telefone'].includes(props.field)) {
      setValue(client[props.field]);
      setTable('client');
    } else {
      setValue(adress[props.field]);
      setTable('adress');
    }
  };

  const saveField = () => {
    if (valid) {
      if (table === 'client') {
        setClient((lastClient) => ({
          ...lastClient,
          [props.field]: value || null
        }));
      } else if (table === 'adress') {
        setAdress((lastAdress) => ({
          ...lastAdress,
          [props.field]: value || null
        }));
      }
    }
  };

  const verifyCEP = async () => {
    try {
      await cep(value);
      setError('');
      setValid(true);
    } catch (err) {
      setError("Digite um CEP válido!");
      setValid(false);
    }
  };

  const verifyCPF = () => {
    if (cpf.isValid(value)) {
      setError('');
      setValid(true);
    } else {
      setError('Digite um CPF válido!');
      setValid(false);
    }
  };

  useEffect(() => {
    if (!error && valid) {
      saveField();
    }
  }, [error, value, valid]);

  return (
    <>
      <View style={styles.viewField}>
        <Text style={styles.textBold}>{props.label}</Text>
        <MaskInput
          style={styles.input}
          value={value}
          onChangeText={(_, newText) => setValue(newText)}
          mask={typeMask}
          editable={true}
          keyboardType={typeBoard}
          onBlur={() => {
            if (props.field === "cep") verifyCEP();
            if (props.field === "cpf") verifyCPF();
          }}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

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
  },
  error: {
    color: 'red',
    fontFamily: 'Poppins-Medium',
    marginTop: 10
  }
});

export default InputPerfilEditar;
