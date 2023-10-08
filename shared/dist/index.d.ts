import React from 'react';

interface HeaderPublicAreaProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const HeaderPublicArea: (props: HeaderPublicAreaProps) => React.JSX.Element;

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;

export { Button, HeaderPublicArea };
