const { encrypt, decrypt } = require('./script');

const payload = { username: 'cryst', role: 'admin' };
const token = encrypt(payload);
console.log('🔐 Token:', token);

const decoded = decrypt(token);
console.log('🔓 Decoded:', decoded);

if (decoded) console.log('✅ Success');
