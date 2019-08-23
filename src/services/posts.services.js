import config from '../config/api';

class PostLinks {
  constructor(config, http) {
    this.url = config.url;
    this.http = http;
  }
  async posts() {
    try {
      const response = await this.http.get(`${this.url}/posts`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async authors() {
    try {
      const response = await this.http.get(`${this.url}/users`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async comments() {
    try {
      const response = await this.http.get(`${this.url}/comments`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

const newPostLinks = new PostLinks(config);

export default newPostLinks;

