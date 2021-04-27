import storage from 'redux-persist/lib/storage';

const storageOptions = {
  key: 'root',
  storage,
  blacklist: [
    'itemReducer',
  ],
};
export default storageOptions;