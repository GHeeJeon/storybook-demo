import React from 'react';

interface ModalDefaultProps {
  visible: boolean;
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

const ModalDefault = ({ visible, title, subTitle, children }: ModalDefaultProps) => {
  if (!visible) return null;

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', width: '400px', backgroundColor: 'white' }}>
      <h2>{title}</h2>
      {subTitle && <h4>{subTitle}</h4>}
      <div>{children}</div>
    </div>
  );
};

export default ModalDefault;
