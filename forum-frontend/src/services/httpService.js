import apiClient from "./api-client";
class HttpService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll() {
    return apiClient.get(`/${this.endpoint}/`);
  }

  get(id) {
    return apiClient.get(`/${this.endpoint}/${id}`);
  }

  post() {
    apiClient.post(`/${this.endpoint}/`);
  }

  update(id) {
    apiClient.put(`/${this.endpoint}/${id}`);
  }

  vote(id) {
    apiClient.put(`/${this.endpoint}/${id}/vote`);
  }

  delete(id) {
    apiClient.delete(`/${this.endpoint}/${id}`);
  }
}

export default function (endpoint) {
  return new HttpService(endpoint);
}
