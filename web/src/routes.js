import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
   <BrowserRouter>
      {/*   O Switch faz com que apenas uma rota seja chamada por vez,
         o react-router-dom permite que mais de um componente seja
         mostrado por vez na tela. Em uma rota '.../produtos/detalhe/',
         seria mostrado ambos os conteudos da rota '/produtos' e da
         rota '/detalhe' em uma só página.
            O 'exact' que esta como um parametro do 'Route' serve para
         que a rota seja acessada apenas quando o 'path' for exato,
         em outro caso uma aproximação ja bastaria, qualquer rota que
         comessase com '/' seria redirecionada para o 'component' 'Main.*/}
      <Switch>
         <Route exact path="/" component={Main}/>
         <Route path="/products/:id" component={Product}/>
      </Switch>
   </BrowserRouter>
)

export default Routes;