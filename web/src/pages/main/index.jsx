import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

const Main = () => {
   const [ products, setProducts ] = useState([]);
   const [ productsInfo, setProductsInfo ] = useState([]);

   useEffect(() => {
      loadProducts();
   },[]);

   function prevPage() {
      if(productsInfo.page === 1) return;

      loadProducts(productsInfo.page - 1);
   }

   function nextPage() {   
      if(productsInfo.page === productsInfo.pages) return;

      loadProducts(productsInfo.page + 1);
   }

   async function loadProducts(page = 1) {

      await api.get('/products/?page=' + page).then(res => {
         const { docs, ...productsInfo } = res.data;
         setProducts(docs);
         setProductsInfo(productsInfo);
      }).catch(err => console.log(err));
   }

   return(
      <div className="product-list">
         {products.map(product => (
            <article key={product.id}>
               <strong>{product.title} id: {product.id}</strong>
               <p>{product.description}</p>

               <Link to={`/products/${product.id}`}>Acessar</Link>
            </article>
         ))}
         <div className="actions">
            <button disabled={productsInfo.page === 1} onClick={prevPage}>Anterior</button>
            <button disabled={productsInfo.page === productsInfo.pages} onClick={nextPage}>Próxima</button>   
         </div>
      </div>
   )
}

export default Main;