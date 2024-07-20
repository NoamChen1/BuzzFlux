const currentUser = localStorage.getItem('currentUser');
const feed = document.getElementById('feed');

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'index.html';
    } else {
        alert('Please enter a username.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    if (!currentUser) {
        window.location.href = 'loginPage.html'; // Redirect to login if not logged in
    } else {
        // Show the posting area or other elements that require login
        document.getElementById('newPost').style.display = 'block';
    }
});

function postMessage() {
    const content = document.getElementById('postContent').value;
    if (content && currentUser) {
        const postElement = document.createElement('div');
        postElement.textContent = `${currentUser}: ${content}`;
        feed.prepend(postElement); // Adds the new post to the top of the feed
        document.getElementById('postContent').value = ''; // Clear the textarea after posting
    } else {
        alert('Please enter some text to post!');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'loginPage.html'; // Redirect to login on logout
}
