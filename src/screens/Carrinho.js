import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import ItemCarrinho from "../components/ItemCarrinho";

const Carrinho = () => {

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
      <ScrollView>
        <Text style={styles.title}>Produtos escolhidos</Text>
        <ItemCarrinho img={data[0].img} name={data[0].name} qtd={data[0].qtd} />
        <ItemCarrinho img={data[1].img} name={data[1].name} qtd={data[1].qtd} />
        <ItemCarrinho img={data[2].img} name={data[2].name} qtd={data[2].qtd} />
      </ScrollView>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Fazer pedido pelo Whatsapp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerButton: {
    height: 150,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#09C902',
    height: 50,
    width: 285,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    margin: 16
  }
})

export default Carrinho