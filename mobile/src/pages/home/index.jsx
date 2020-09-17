import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

//blabalabalb

const Home = () => {
   const [products, setProducts] = useState([]);
   const [productInfo, setProductInfo] = useState({});

   const navigation = useNavigation();

   useEffect(() => {
      loadProducts();
   }, []);

   async function loadProducts(p = 1) {
      api.get(`/products/?page=${p}`).then(res => {
         const { docs, ...info } = res.data;

         setProducts([ ...products, ...docs ]);
         setProductInfo(info);

         setPage(p + 1);
      }).catch(err => {
         // Mensagem de erro
      })
   }

   function loadMore() {
      if(parseInt(productInfo.page) !== productInfo.pages){
         const nextPage = parseInt(productInfo.page) + 1;
         loadProducts(nextPage);
      }  
   }

   const renderItem = ({ item }) => (
      <View key={item._id} style={styles.productContainer}>
         <Text style={styles.productTitle}>{item.title}</Text>
         <Text style={styles.productDescription}>{item.description}</Text>
         <TouchableOpacity
            style={styles.productButton}
            onPress={() => {
               navigation.navigate('Product', { product: item });
            }}
         >
            <Text style={styles.buttonTitle}>Acessar</Text>
         </TouchableOpacity>
      </View>
   );

   return (
      <View style={styles.container}>
         <FlatList
            contentContainerStyle={styles.list}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fafafa',
   },

   list: {
      padding: 20
   },

   productContainer: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 20,
      marginBottom: 20
   },

   productTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333'
   },

   productDescription: {
      fontSize: 16,
      color: '#999',
      marginTop: 5,
      lineHeight: 24
   },

   productButton: {
      height: 42,
      marginTop: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#DA552F',
      backgroundColor: "transparent",
      justifyContent: 'center',
      alignItems: 'center'
   },

   buttonTitle: {
      fontSize: 16,
      color: '#DA552F'
   }
});

export default Home;
