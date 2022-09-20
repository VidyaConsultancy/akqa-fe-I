class APIService {
  #baseUrl;

  constructor() {
    this.#baseUrl = `http://localhost:4000`
  }

  #makeRequest = async ({ endPoint, method, data = {}, headers = {} }) => {
    const options = { method, headers };

    if(Object.keys(data).length > 0) {
      options.body = JSON.stringify(data);
    }
    
    const url = `${this.#baseUrl}/${endPoint}`;
    try {
      const res = await fetch(url, options);
      const response = await res.json();
      return response;
    } catch (error) {
      throw error;
    }
  }

  get = ({ endPoint, headers }) => {
    return this.#makeRequest({ endPoint, method: 'GET', headers })
  }

  post = ({ endPoint, headers, data }) => {
    return this.#makeRequest({ endPoint, method: 'POST', headers, data })
  }

  put = ({ endPoint, headers, data }) => {
    return this.#makeRequest({ endPoint, method: 'PUT', headers, data })
  }

  patch = ({ endPoint, headers, data }) => {
    return this.#makeRequest({ endPoint, method: 'PATCH', headers, data })
  }

  delete = ({ endPoint, headers }) => {
    return this.#makeRequest({ endPoint, method: 'DELETE', headers })
  }
}

export const api = new APIService();
