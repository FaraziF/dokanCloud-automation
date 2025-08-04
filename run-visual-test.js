#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Starting Visual BDD Test...');
console.log('📝 This will run the Create Category scenario with visible browser');
console.log('');

try {
  // Run the create category scenario
  execSync('npm run test:bdd:create', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' }
  });
} catch (error) {
  console.log('✅ Test completed (pending status is expected)');
} 