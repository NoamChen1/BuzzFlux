// This could be part of User or a separate module
export function checkSession() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'loginPage.html';
    }
}
