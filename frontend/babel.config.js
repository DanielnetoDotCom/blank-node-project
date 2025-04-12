// frontend/babel.config.js
export default {
    // 1) Transpile code to match the Node version used during tests
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      // 2) Enable JSX transformation with React automatic runtime (no need to import React)
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  
    // 3) Transform import.meta.* to static values in test environment
    plugins: [
      [
        'babel-plugin-transform-import-meta',
        {
          // replaces import.meta.env.VITE_API_BASE_URL during tests
          env: {
            VITE_API_BASE_URL: 'http://localhost:5000', // dummy value for Jest
          },
        },
      ],
    ],
  };
  