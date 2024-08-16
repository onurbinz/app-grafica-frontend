import React, { useContext, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { List } from 'react-native-paper';
import { ProductsContext } from '../contexts/productsContext';

const CustomDrawer = (props) => {
  const { productTypes } = useContext(ProductsContext);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpand = (type) => {
    setExpandedSections({
      ...expandedSections,
      [type]: !expandedSections[type]
    })
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Todos os Produtos"
        onPress={() => props.navigation.navigate('Produtos')}
      />
      {productTypes.map((section, index) => (
        <View key={index}>
          <List.Accordion
            title={section.type}
            expanded={expandedSections[section.type]}
            onPress={() => toggleExpand(section.type)}
          >
            {section.data.map((subType, subIndex) => (
              <DrawerItem
                key={subIndex}
                label={subType}
                onPress={() => props.navigation.navigate('Produtos', { filter: subType })}
              />
            ))}
          </List.Accordion>
        </View>
      ))}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
