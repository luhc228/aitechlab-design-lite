import request from '@/request';

export default {
  dataSource: {},

  async fetchDataSource(page) {
    try {
      const response = await request.get(`/api/fetch/datasource/${page}`);
      console.log(response);
      this.dataSource = response.data;
    } catch {
      this.dataSource = []
    }
  },
}
