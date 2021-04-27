import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';
//if you want to get rid of the warnings uncomment the line below:
//console.disableYellowBox = true;

//create redux store here and persistor (object destructeured syntax)
const { persistor, store } = ConfigureStore();

//Wrap main in provider component passing the store to the provider component as a prop
//this gives main component and all of its child components the ability to connect to the redux store
//PersistGate component helps integrate it with react and react native apps - prevents the app from rendering until the redux store has rehydrated fully from client storage
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
