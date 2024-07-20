import { User, Post, Feed } from './utils/classes.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const postButton = document.getElementById('postButton');

    if (loginButton) {
        loginButton.addEventListener('click', login);
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    if (postButton) {
        postButton.addEventListener('click', () => {
            const content = document.getElementById('postContent').value;
            const currentUser = localStorage.getItem('currentUser');
            const post = new Post(content, currentUser);
            const feed = new Feed();
            feed.addPost(post);
            document.getElementById('postContent').value = '';
        });
    }
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        const user = new User(username);
        user.login();
    } else {
        alert('Please fill in both username and password.');
    }
}

function logout() {
    const user = new User(localStorage.getItem('currentUser'));
    user.logout();
}
