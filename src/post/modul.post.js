// import newPostLinks from '../services/modul.post';

const getCard = async () => {
	try {
		const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
		const getPosts = await posts.json();
		const authors = await fetch('https://jsonplaceholder.typicode.com/users');
		const getAuthors = await authors.json();
		// const comments = await fetch('https://jsonplaceholder.typicode.com/comments');
		// const getComments = await comments.json();

		getPosts.forEach(function(item) {
			let div = document.createElement('div');
			div.className = 'card';
			document.body.appendChild(div);

			let d = document.createElement('div');
			d.className = 'card-body';
			div.appendChild(d);

			let h4 = document.createElement('h4');
			h4.className = 'card-title';
			let title = `${item.title}`;
			title = title.charAt(0).toUpperCase() + title.substr(1);
			h4.innerHTML = title;

			console.log(`${item.title}`);
			d.appendChild(h4);

			let p = document.createElement('p');
			p.className = 'card-text';
			let body = `${item.body}`;
			body = body.charAt(0).toUpperCase() + body.substr(1);
			p.innerHTML = body;
			d.appendChild(p);

			let author = document.createElement('a');
			author.className = 'card-link-author';
      author.innerHTML = 'About author';
      author.setAttribute("href", '#');
      d.appendChild(author);
      
      let comments = document.createElement('a');
			comments.className = 'card-link-comments ml-2';
      comments.innerHTML = 'Comments';
      comments.setAttribute("href", '#');
      d.appendChild(comments);
      
		});
	} catch (err) {
		console.error(err);
	}
};

const modul = new getCard();
export default modul;
