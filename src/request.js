// http request
import axios from 'axios';
import { Message } from '@alifd/next';
import history from './history';
import user from '@/utils/user';
import appConfig from './appConfig';

const errorHandle = (status, message) => {
  switch (status) {
    case 401:
      Message.error('登录失败');
      user.logout();
      history.push('/login/examinee');
      break;
    case 403:
      Message.error('登录过期，请重新登录');
      user.logout();
      history.push('/login/examinee');
      break;
    case 404:
      Message.error('请求资源不存在');
      break;
    default:
      Message.error(message);
  }
}

const instance = axios.create({
  baseURL: '/',
  timeout: 1000 * 12,
  // 跨域不带cookie
  withCredentials: true,
  // csrf/xsrf 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const { url } = newConfig;
    if (url && process.env.NODE_ENV === 'production') {
      newConfig.url = /^\/auth/.test(url)
        ? appConfig.authUrl + url.replace('/auth', '')
        : appConfig.apiUrl + url;
    }
    // const token = 'xxx133';
    // token && (config.headers.Authorization = token);
    return newConfig;
  },
  error => Promise.reject(error)
);

/**
 * 默认响应拦截器
 */
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      const { data } = res;
      const { code, success, message } = data;
      if (success) {
        return Promise.resolve(data);
      }
      errorHandle(code, message);
      return Promise.reject(data);
    }

    return Promise.reject(res);
  },
  (error) => {
    const { response } = error;
    if (response) {
      // 请求成功，但是不在2xx范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    }
    // 处理断网情况
    if (!window.navigator.onLine) {
      // 更新state 的 network状态
    }
    return Promise.reject(error);
  }
);

export default instance;
