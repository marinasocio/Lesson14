import newsPosts from '../services/posts.services';

class Posts {
	constructor(api) {
		this.api = api;
		this.posts = null;
		this.comments = null;
  }
  async init() {
    const response = await Promise.all([
      this.api.posts(),
      this.api.comments(),
    ]);
    const [ posts, comments ] = response;
    this.posts = posts;
    this.comments = comments;
    return response;
    // console.log(response);
  }
}

const posts = new Posts(newsPosts);

export default posts;
