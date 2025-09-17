// Dummy API functions for demonstration

export async function login(username, password) {
  // Replace with your real authentication logic
  if (username === 'test' && password === 'password') {
    return 'dummy-token-123';
  }
  throw new Error('Invalid credentials');
}

export async function getCustomerInfo(token) {
  // Replace with your real API call logic
  if (token === 'dummy-token-123') {
    return {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      accountNumber: 'ACC1234567',
    };
  }
  return null;
}