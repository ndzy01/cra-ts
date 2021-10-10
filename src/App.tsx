import React from 'react';
import { useReq } from './http';
import './App.css';

function App() {
  const { run } = useReq();
  return (
    <div className="App">
      <div
        onClick={() => {
          run({
            url: 'https://neteasecloudmusicapi.vercel.app:3000/login/cellphone',
            withCredentials: true,
          });
        }}
      >
        请求
      </div>
    </div>
  );
}

export default App;
