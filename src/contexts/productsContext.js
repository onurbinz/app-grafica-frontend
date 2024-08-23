import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext(null)

function ProductsProvider({ children }) {
  const API_URL = process.env.EXPO_PUBLIC_API_URL

  const [productData, setProductData] = useState(null)

  useEffect(() => {
    fetchProducts()

    const intervalId = setInterval(() => {
      fetchProducts()
    }, 10000)

    return () => clearInterval(intervalId)
  }, [])


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/produtos`)
      setProductData(response.data)
    } catch (err) {
      console.error(err);
      Alert.alert('Vish', 'Não foi possivel buscar os produtos')
    }
  }

  if (productData) {
    const types = []
    productData.map((element) => {
      types.includes(element.tipo) ? null : types.push(element.tipo)
    })
    // console.log(types);
  }





  const [productTypes, setProductTypes] = useState([
    {
      type: 'Copo',
      data: ['Copo Personalizado', 'Caneca de porcelana', 'Long drink']
    },
    {
      type: 'Camisas',
      data: ['Camiseta Unissex', 'Lisa', 'Personalizada']
    },
    {
      type: 'Banner',
      data: ['Banner 3X4', 'Banner 5X5', 'Banner YXY']
    }
  ])

  const addProductType = (newType, newData) => {
    setProductTypes(...productTypes, { type: newType, data: newData })
  }


  const addProductData = (newProduct) => {
    setProductData([...productData, newProduct])
  }

  return (
    <ProductsContext.Provider value={{ productTypes, addProductType, productData, addProductData }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider

// [
//   {
//     id: Math.random().toFixed(2) * 100,
//     type: 'Copo',
//     subtype: 'Copo Personalizado',
//     title: 'Copo Festa 480 ml (Arte 360º)',
//     desc: 'descricao de copo personalizado 360° arte',
//     img: require('./../../assets/imgs/copo1.jpg'),
//   },
//   {
//     id: Math.random().toFixed(2) * 100,
//     type: 'Copo',
//     subtype: 'Long drink',
//     title: 'Copo Festa 480 ml (Branco)',
//     desc: 'descricao de Long drink 360°',
//     img: require('./../../assets/imgs/copo2.jpg'),
//   },
//   {
//     id: Math.random().toFixed(2) * 100,
//     type: 'Copo',
//     subtype: 'Caneca de porcelana',
//     title: 'Copo Festa 480 ml (Branco c/ Degradê)',
//     desc: 'descricao de Caneca de porcelana 360° arte',
//     img: require('./../../assets/imgs/copo3.jpg'),
//   },
//   {
//     id: Math.random().toFixed(2) * 100,
//     type: 'Camisa',
//     subtype: 'Camiseta Unissex',
//     title: 'Camiseta Preta Tam. G',
//     desc: 'descricao de Caneca de porcelana 360° arte',
//     img: require('./../../assets/imgs/camisa1.jpg'),
//   },
// ]