import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";

const ItemCarrinho = props => {

  const data = [
    {
      img: require('./../../assets/imgs/copo1.jpg'),
      name: 'Copo Festa 480 ml (Arte 360°)',
      qtd: 10
    },
    {
      img: require('./../../assets/imgs/copo2.jpg'),
      name: 'Copo Festa 480 ml (Arte 360°)',
      qtd: 20
    },
    {
      img: require('./../../assets/imgs/copo3.jpg'),
      name: 'Copo Festa 480 ml (Arte 360°)',
      qtd: 15
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={props.img}
          style={styles.img}
        />
      </View>
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.containerQtd}>
        <Text>QTD: </Text>
        <Text style={styles.qtd}>{props.qtd}</Text>
      </View>
      <TouchableOpacity style={styles.icon}>
        <Icon
          name="delete-forever"
          type="material-community"
          size={30}
          color="#D4111C"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    height: 100,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: '40%',
  },
  containerImg: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    resizeMode: 'contain',
    height: 80,
    width: 80,
  },
  icon: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerQtd: {
    width: '15%',
  },
  qtd: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18
  }
})

export default ItemCarrinho