import React from 'react';
import { ConfigProvider, Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const withCustomTheme = (Component: React.ComponentType) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Component />
  </ConfigProvider>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default withCustomTheme(App);
