let backendHost = process.env.REACT_APP_BACKEND_HOST || '';
let port = process.env.REACT_APP_BACKEND_HOST_PORT || ''
let API_ROOT = ''
if (backendHost) {
    API_ROOT = backendHost;
}
if (port) {
    API_ROOT = `http://${API_ROOT}:${port}`
}
export {API_ROOT};