import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import CardProtudo from './../components/CardProduto'
import { ProductsContext } from "../contexts/productsContext";

const Produtos = props => {
  const productData = useContext(ProductsContext).productData

  const showIndividualProduct = (id) => {
    props.navigation.navigate('ProdutoFoco', { id })
  }

  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>{props.route.params ? props.route.params.filter : 'Todos os produtos'}</Text>
        <View style={styles.containerProdutos}>
          {props.route.params
            ? productData.filter(product => product.subtype === props.route.params.filter).map(product => <CardProtudo key={product.id} {...product} showIndividualProduct={showIndividualProduct}/>)
            : productData.map(product => <CardProtudo key={product.id} {...product} showIndividualProduct={showIndividualProduct} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerProdutos: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 16
  },
  subtitle: {

  },
})

export default Produtos