const Mock = require('mockjs')

module.exports = {
  // 同时支持 GET 和 POST
  '/api/users/1': { data: {} },
  '/api/foo/bar': { data: {} },

  // 支持标准 HTTP
  'GET /api/fetch/datasource/:page': (req, res) => {
    const { page } = req.params;
    res.send(Mock.mock({
      data: {
        page: Number(page),
        total: 60,
        'list|10': [{ name: '@name', 'id|1-10000': 50, class: 'ice' }],
      },
      success: true,
      message: '请求成功',
    }))
  },
};
