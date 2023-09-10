// import {test, expect, mock, describe, afterEach, beforeAll, beforeEach} from 'bun:test';
// import { Api } from './Api';
//
// // FIXME: Mocks don't seem to be working correctly?
// describe("Api Class tests", () => {
//     let mockedFetch: any;
//
//     beforeEach(() => {
//         mockedFetch = mock(fetch);
//     })
//
//     // Reset mock count and state after each test
//     afterEach(() => {
//         mockedFetch.mockReset();
//     });
//
//     test('testing', async () => {
//        mockedFetch.mockResolvedValue(new Response(JSON.stringify({ data: 'success' })));
//        console.log(fetch);
//     });
//
//     // test('Api class - GET request', async () => {
//     //     const api = new Api({ baseUrl: 'https://api.example.com' });
//     //
//     //     mockedFetch.mockResolvedValue(new Response(JSON.stringify({ data: 'success' })));
//     //
//     //     const data = await api.get('/endpoint');
//     //
//     //     expect(data).toEqual({ data: 'success' });
//     //     // FIXME: Not supported yet https://github.com/oven-sh/bun/issues/1825
//     //     // expect(mockedFetch).toHaveBeenCalledWith('https://api.example.com/endpoint', expect.objectContaining({ method: 'GET' }));
//     //     expect(mockedFetch).toHaveBeenCalledTimes(1);
//     // });
//
//     //
//     // test('Api class - POST request', async () => {
//     //     const api = new Api({ baseUrl: 'https://api.example.com' });
//     //
//     //     mockedFetch.mockResolvedValue(new Response(JSON.stringify({ data: 'success' })));
//     //
//     //     const payload = { field1: 'value1', field2: 'value2' };
//     //     const data = await api.post('/endpoint', payload);
//     //
//     //     expect(data).toEqual({ data: 'success' });
//     //     // FIXME: Not supported yet https://github.com/oven-sh/bun/issues/1825
//     //     // expect(mockedFetch).toHaveBeenCalledWith(
//     //     //     'https://api.example.com/endpoint',
//     //     //     expect.objectContaining({
//     //     //         method: 'POST',
//     //     //         body: JSON.stringify(payload),
//     //     //     })
//     //     // );
//     //     expect(mockedFetch).toHaveBeenCalledTimes(1);
//     // });
//     //
//     // test('Api class - request error handling', async () => {
//     //     const api = new Api({ baseUrl: 'https://api.example.com' });
//     //
//     //     mockedFetch.mockRejectedValue(new Error('Network Error'));
//     //
//     //     await expect(api.get('/endpoint')).rejects.toThrow('Fetch failed: Network Error');
//     //     expect(mockedFetch).toHaveBeenCalledTimes(1);
//     // });
//     //
//     // test('Api class - non-ok HTTP status', async () => {
//     //     const api = new Api({ baseUrl: 'https://api.example.com' });
//     //
//     //     const response = new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
//     //     mockedFetch.mockResolvedValue(response);
//     //
//     //     await expect(api.get('/endpoint')).rejects.toThrow('Unauthorized');
//     //     expect(mockedFetch).toHaveBeenCalledTimes(1);
//     // });
//     //
//     // test('Api class - PUT request', async () => {
//     //     const api = new Api({ baseUrl: 'https://api.example.com' });
//     //
//     //     mockedFetch.mockResolvedValue(new Response(JSON.stringify({ data: 'updated' })));
//     //
//     //     const payload = { field1: 'new_value1', field2: 'new_value2' };
//     //     const data = await api.put('/endpoint', payload);
//     //
//     //     expect(data).toEqual({ data: 'updated' });
//     //     // FIXME: Not supported yet https://github.com/oven-sh/bun/issues/1825
//     //     // expect(mockedFetch).toHaveBeenCalledWith(
//     //     //     'https://api.example.com/endpoint',
//     //     //     expect.objectContaining({
//     //     //         method: 'PUT',
//     //     //         body: JSON.stringify(payload),
//     //     //     })
//     //     // );
//     //     expect(mockedFetch).toHaveBeenCalledTimes(1);
//     // });
//     //
//     // test('Api class - DELETE request', async () => {
//     //     const api = new Api({ baseUrl: 'https://api.example.com' });
//     //
//     //     mockedFetch.mockResolvedValue(new Response(JSON.stringify({ data: 'deleted' })));
//     //
//     //     const data = await api.delete('/endpoint');
//     //
//     //     expect(data).toEqual({ data: 'deleted' });
//     //     // FIXME: Not supported yet https://github.com/oven-sh/bun/issues/1825
//     //     // expect(mockedFetch).toHaveBeenCalledWith('https://api.example.com/endpoint', expect.objectContaining({ method: 'DELETE' }));
//     //     expect(mockedFetch).toHaveBeenCalledTimes(1);
//     // });
// });
