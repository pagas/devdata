/**
 * We also have methods for retrieving data from server.
 * In the case we access protected resources, the HTTP request needs Authorization header.
 *
 * The code below checks Local Storage for user item.
 * If there is a logged in user with accessToken (JWT), return HTTP Authorization header.
 * Otherwise, return an empty object.

    Note: For Node.js Express back-end, please use x-access-token header like this:
    { 'x-access-token': user.accessToken }
    Other header
    { Authorization: 'Bearer ' + user.accessToken }

 * @returns {{Authorization: string}|{}}
 */


export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {'x-access-token': user.accessToken}
    } else {
        return {};
    }
}
