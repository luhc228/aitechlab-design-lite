class CookieUtil {
  setItem = (name, value, options = {}) => {
    if (name && value) {
      let cookie = `${name}=${value}`;
      if (options) {
        if (options.expires) {
          cookie += `;expires=${options.expires}`;
        }
        if (options.maxAge) {
          cookie += `;max-age=${options.maxAge}`;
        }
        if (options.path) {
          cookie += `;path=${options.path}`;
        }
        if (options.domain) {
          cookie += `;domain=${options.domain}`;
        }
        if (options.secure) {
          cookie += `;secure=${options.secure}`;
        }
      }
      document.cookie = cookie;
      return cookie;
    }
    return '';
  };

  deleteItem = (name) => {
    document.cookie = `${name}=;max-age=0`;
  };

  getCookiesObj = () => {
    const cookies = {};
    if (document.cookie) {
      const objects = document.cookie.split(';');
      Object.keys(objects).forEach(i => {
        const index = objects[i].indexOf('=');
        const name = objects[i].substr(0, index).trim();
        const value = objects[i].substr(index + 1, objects[i].length);
        cookies[name] = value;
      });
    }

    return cookies;
  };

  getItem = (name) => {
    return this.getCookiesObj()[name];
  };

  clearCookies = () => {
    const cookies = this.getCookiesObj();
    Object.keys(cookies).forEach(i => {
      document.cookie = `${cookies[i]}=;max-age=0`;
    });
  };
}

export default new CookieUtil();
