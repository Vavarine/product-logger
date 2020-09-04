import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

const Product = (props) => {
   const [ product, setProduct ] = useState({});

   useEffect(() => {
      const { id } = props.match.params;
      
      api.get(`/products/${id}`).then(res => {
         setProduct(res.data);
      }).catch(err => {
         console.log(err);
      })

   }, []);

   return(
      <div className="product-info">
         <h1>{product.title}</h1>
         <p>{product.description}</p>

         <p>
            URL: <a href={product.url}>{product.url}</a>
         </p>
      </div>
   ) 
}

export default Product;