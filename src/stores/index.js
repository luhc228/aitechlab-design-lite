import Icestore from '@ice/store';
import dashboard from './dashboard.store';

const stores = {
  dashboard,
};

const icestore = new Icestore();

Object.keys(stores).forEach((key) => {
  icestore.registerStore(key, stores[key]);
});

export default icestore;
