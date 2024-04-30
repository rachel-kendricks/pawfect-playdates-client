const API_URL = "http://localhost:8000"

export const fetchWithResponse = (resource, options) =>
  fetch(`${API_URL}/${resource}`, options)

export const fetchWithoutResponse = (resource, options) =>
  fetch(`${API_URL}/${resource}`, options)