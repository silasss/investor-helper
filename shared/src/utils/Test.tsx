import React from "react";

const Test = ({ children }: {children: React.ReactNode}) => {
  return <>
    <div>Meu teste</div>
    {children}
  </>;
};

export default Test;
