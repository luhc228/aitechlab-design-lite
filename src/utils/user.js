import cookieUtil from './cookie';

class User {
  /**
   * 保存token 到cookie中
   * @param accessToken
   */
  saveToken = (accessToken) => {
    cookieUtil.setItem('accessToken', accessToken, {
      path: '/',
      maxAge: 3600 * 12,
    });
  };

  /*
   * 获取token
   */
  getToken = () => {
    return cookieUtil.getItem('accessToken');
  };

  /**
   * 判断用户是否登录
   */
  isLogin = () => {
    return !!cookieUtil.getItem('accessToken');
  };

  /**
   * 保存登录接口返回的用户名、角色Id
   * @param {string} username
   */
  saveUserInfoToCookie = (userInfo, userId) => {
    cookieUtil.setItem('userId', userId, {
      path: '/',
      maxAge: 3600 * 12,
    });
    cookieUtil.setItem('userInfo', JSON.stringify(userInfo), {
      path: '/',
      maxAge: 3600 * 12,
    });
  };

  getUserInfo = () => {
    const userInfo = cookieUtil.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : { username: '' };
  };

  /**
   * 用户退出登录
   *
   * @memberof User
   */
  logout = () => {
    cookieUtil.deleteItem('adminId');
    cookieUtil.deleteItem('userInfo');
  };
}

export default new User();
