import { test, expect } from '@playwright/test';

// assert: order number is returned using using get/orders
test('GET /orders', async( {request} ) => {
  // get orders with params from met office api doc
const response = await request.get('/orders', {
    params: {
      detail: 'MINIMAL',
      dataSpec: '1.1.0'
    },
  });

  // assert: returns a json with order number. Response is ok
  expect(response.ok()).toBeTruthy();

  // check response json
  const body = await response.json();
  expect(body).toHaveProperty('orderId');
})