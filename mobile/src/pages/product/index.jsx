import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView,  } from 'react-native-webview';

const Product = () => {
   const [ loading, setLoading ] = useState(true);

   const route = useRoute();
   const { product } = route.params;
   const navigation = useNavigation();

   navigation.setOptions({ title: product.title });

   function displaySpinner(){
      return(
         <ActivityIndicator style={styles.loading} size='large' color='#DA552F' />
      )
   }

   return(
         <WebView
            style={styles.webview}
            startInLoadingState={true}
            source={{ uri: product.url }}
            renderLoading={() => {
               return displaySpinner();
            }}
            onLoadStart={() => {console.log('started'); setLoading(false)}}
            onLoadEnd={() => {console.log('finished'); setLoading(false)}}
         />
   )
}

const styles = StyleSheet.create({
   loading: {
      position: 'absolute',
      backgroundColor: '#fafafa',
      height: '100%',
      width: '100%'
   }
})

export default Product; 