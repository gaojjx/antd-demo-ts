import React from 'react';
import type { FC } from 'react';
import { Button, ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const App:FC = () =>{
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
    </div>
  );
}
export default ()=>(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary:'#00b96b',
      }
    }}
    >
    <App />
  </ConfigProvider>
);
