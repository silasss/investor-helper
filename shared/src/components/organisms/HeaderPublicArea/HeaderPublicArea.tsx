import React from 'react';

export interface HeaderPublicAreaProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const HeaderPublicArea = (props: HeaderPublicAreaProps) => {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  )
}

export default HeaderPublicArea;
