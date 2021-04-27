import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Store } from '../../store/store';
import Header from '../../components/Header/Header';
import Footer from '../../components/shared/Footer/Footer'
import Main from '../main/Main';
import '../../assets/sass/App.scss';
import '../../store/store';
const NotFound = () => {
  return <div>No se encontró la página</div>;
};
function App() {
  return (
    <Provider store={Store()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/items" component={Main} />
          <Route exact path="/items/:id" component={Main} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;