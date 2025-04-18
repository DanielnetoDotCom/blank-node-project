import React, { useState } from 'react';
import Button from './Button';

function PingPong({ baseUrl }) {
  if (!baseUrl) {
    throw new Error('PingPong component requires a baseUrl prop');
  }

  const [response, setResponse] = useState('');
  const [count, setCount]   = useState(0);

  const ping = async () => {
    try {
      const res  = await fetch(`${baseUrl}/api/ping`);
      const data = await res.json();

      if (data.message === 'pong') setCount(prev => prev + 1);
      setResponse(data.message);
    } catch {
      setResponse('Error contacting server');
    }
  };

  return (
    <div className="p-4 border rounded shadow max-w-sm mx-auto my-4">
      <h2 className="text-xl font-bold mb-2">Ping Pong Test</h2>
      <Button onClick={ping}>Ping</Button>

      {response && (
        <p className="mt-3">
          Server says: <strong>{response}</strong><br />
          Pong count: <strong>{count}</strong>
        </p>
      )}
    </div>
  );
}

export default PingPong;
