const url = 'https://api.tech.redventures.com.br';

const init = (method, params) => ({
    headers: new Headers({
        'Content-Type': 'application/json',
        'x-api-key': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'
    }),
    mode: 'cors',
    method,
    body: params ? JSON.stringify(params) : null
})

const http = {
    async get(endpoint, params) {
        endpoint = this.treatEndpoint(endpoint) + new URLSearchParams(params).toString();

        return fetch(url + endpoint, init('get')).then(this.treatResponse);
    },
    async post(endpoint, params) {
        endpoint = this.treatEndpoint(endpoint);

        return fetch(url + endpoint, init('post', params)).then(this.treatResponse);
    },

    treatEndpoint(endpoint) {
        return endpoint.charAt(0) == '/' ? endpoint : '/' + endpoint;
    },

    async treatResponse(response) {
        try {
            return response.json();
        } catch (e) {
            console.warn(e);

            return false;
        }
    }
};

export default http;