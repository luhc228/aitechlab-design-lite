import ReactDOM from 'react-dom';
import './global.scss';
import router from './router';

const APP = document.getElementById('app');

if (!APP) {
  throw new Error('当前页面不存在 <div id="app"></div> 节点.');
}

ReactDOM.render(router(), APP);
