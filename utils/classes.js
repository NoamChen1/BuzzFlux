export class User {
    constructor(username) {
        this.username = username;
    }

    login() {
        localStorage.setItem('currentUser', this.username);
        window.location.href = 'index.html'; // Redirect to the main page
    }

    logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'loginPage.html'; // Redirect to the login page
    }
}
export class Post {
    constructor(content, author) {
        this.content = content;
        this.author = author;
        this.timestamp = new Date();
    }

    create() {
        const postElement = document.createElement('div');
        postElement.textContent = `${this.author}: ${this.content} (Posted on ${this.timestamp.toLocaleString()})`;
        const feed = document.getElementById('feed');
        feed.prepend(postElement);
    }
}
export class Feed {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.unshift(post); // Adds to the beginning of the posts array
        post.create(); // Create and display the post
    }

    refresh() {
        const feed = document.getElementById('feed');
        feed.innerHTML = ''; // Clear current feed
        this.posts.forEach(post => post.create()); // Redisplay all posts
    }
}
