import React from 'react';
import './Login.css';
import { Card ,Space} from "antd";
import logo from './banner.png';
import { mgr } from "../../config/authConfig";
import { Button } from "antd";
const Login = () => {

  return (
    <div className='login-container'>
      <div className='login-wrapper'>

        <Card title={<img alt="logo"  className="loginLogo" src={logo} />}>
          <Space direction="vertical">
          Acessar V8 Fast-track
          <Button type="primary" onClick={() => App()}>Login</Button>
          </Space>
        </Card>

      </div> </div>
  )
}

function App() {
  console.log(mgr);
  mgr.signinRedirect();
}

export default Login;