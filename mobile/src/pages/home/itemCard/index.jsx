import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const itemCard = ({ item }) => {
   const styles = StyleSheet.create({
      productContainer: {
         backgroundColor: '#fff',
         borderWidth: 1,
         borderColor: '#ddd',
         borderRadius: 5,
         padding: 20,
         marginBottom: 20
      },
      productTitle: {
         color: 'red'
      }
   });

   return(
      <View styles={styles.productContainer}>
         <Text styles={styles.productTitle}>{item.title}</Text>
         <Text styles={styles.productDescription}>{item.description}</Text>
         <RectButton styles={styles.prodcutButton} onPress={() => {}}>
            <Text styles={styles.prodcutButtonText}>
               Entrar asjdfkl
            </Text>
         </RectButton>
      </View>
   )
}



export default itemCard;