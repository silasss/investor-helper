import { Provider } from "react-redux";
import React, { ElementType } from "react";
import { HeaderPublicArea, store } from 'shared';

const Dashboard = () => {
  return <>
    <HeaderPublicArea>
      <div>I am the header!</div>
    </HeaderPublicArea>
    <div>Im the dashboard</div>
  </>
};

export default Dashboard;
