interface ApiOptions {
  baseUrl: string;
  headers?: HeadersInit;
}

interface FetchOptions extends RequestInit {
  payload?: Record<string, never>;
}

/**
 * A simple API class for wrapping HTTP requests using node-fetch.
 */
export class Api {
  private readonly baseUrl: string;
  private readonly defaultHeaders: HeadersInit;

  /**
   * Creates an API wrapper instance.
   *
   * @param {ApiOptions} options - Options for API wrapper.
   * @param {string} options.baseUrl - The base URL for the API.
   * @param {HeadersInit} [options.headers] - Default headers to include in API requests.
   */
  constructor({ baseUrl, headers = {} }: ApiOptions) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = headers;
  }

  /**
   * Makes a GET request to a specific endpoint.
   *
   * @param {string} endpoint - API endpoint to fetch data from.
   * @param {HeadersInit} [headers] - Additional headers for the request.
   * @returns {Promise<never>} - Returns a promise resolving with the JSON data.
   */
  public async get<T = never>(
    endpoint: string,
    headers: HeadersInit = {},
  ): Promise<T> {
    return this._fetch<T>("GET", endpoint, { headers });
  }

  /**
   * Makes a POST request to a specific endpoint with a payload.
   *
   * @param {string} endpoint - API endpoint to send data to.
   * @param {Record<string, never>} payload - Data payload to send in request body.
   * @param {HeadersInit} [headers] - Additional headers for the request.
   * @returns {Promise<never>} - Returns a promise resolving with the JSON data.
   */
  public async post<T = never>(
    endpoint: string,
    payload: Record<string, never>,
    headers: HeadersInit = {},
  ): Promise<T> {
    return this._fetch<T>("POST", endpoint, { payload, headers });
  }

  /**
   * Makes a PUT request to a specific endpoint with a payload.
   *
   * @param {string} endpoint - API endpoint to update data at.
   * @param {Record<string, never>} payload - Data payload to send in request body.
   * @param {HeadersInit} [headers] - Additional headers for the request.
   * @returns {Promise<never>} - Returns a promise resolving with the JSON data.
   */
  public async put<T = never>(
    endpoint: string,
    payload: Record<string, never>,
    headers: HeadersInit = {},
  ): Promise<T> {
    return this._fetch<T>("PUT", endpoint, { payload, headers });
  }

  /**
   * Makes a DELETE request to a specific endpoint.
   *
   * @param {string} endpoint - API endpoint to delete data from.
   * @param {HeadersInit} [headers] - Additional headers for the request.
   * @returns {Promise<never>} - Returns a promise resolving with the JSON data.
   */
  public async delete<T = never>(
    endpoint: string,
    headers: HeadersInit = {},
  ): Promise<T> {
    return this._fetch<T>("DELETE", endpoint, { headers });
  }

  /**
   * Internal method to make a fetch request.
   *
   * @private
   * @param {string} method - HTTP method to use for the request.
   * @param {string} endpoint - API endpoint to make the request to.
   * @param {FetchOptions} [options] - Additional fetch options.
   * @returns {Promise<never>} - Returns a promise resolving with the JSON data.
   * @throws Will throw an error if the fetch request fails.
   */
  private async _fetch<T = never>(
    method: string,
    endpoint: string,
    options: FetchOptions = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const config: FetchOptions = {
      ...options,
      method,
      headers: { ...this.defaultHeaders, ...options.headers },
    };

    if (config.payload) {
      config.body = JSON.stringify(config.payload);
      config.headers = {
        "Content-Type": "application/json",
        ...config.headers,
      };
    }

    console.log(url);
    console.log(config);

    let response: Response;

    try {
      response = await fetch(url, config);
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(`Fetch failed: ${error.message}`);
    }

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || response.statusText);
    }

    return response.json();
  }
}
