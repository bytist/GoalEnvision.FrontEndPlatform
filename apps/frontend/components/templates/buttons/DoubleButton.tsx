import React from 'react';
import { Button, Divider } from "antd";

interface RoundButtonProps {
  left: {
    icon: React.ReactNode,
    onClick: Function
  },
  right: {
    icon: React.ReactNode,
    onClick: Function
  },
  style?: React.CSSProperties
}

export const RoundButton: React.FC<RoundButtonProps> = ({ left, right, style }) => {
  return (
    <span style={{ display: 'inline-block', ...style }}>
      <Button
        type="primary"
        style={{
          padding: '0',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '24px 0 0 24px',
          width: 40,
          height: 40
        }}
        onClick={(ev) => left.onClick(ev)}
      >
        {left.icon}
      </Button>

      <Divider
        type="vertical"
        style={{ backgroundColor: '#ffffff', height: '100%', top: 0, margin: 0 }}
      />

      <Button
        type="primary"
        style={{
          padding: '0',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0 24px 24px 0',
          width: 40,
          height: 40
        }}
        onClick={(ev) => right.onClick(ev)}
      >
        {right.icon}
      </Button>
    </span>
  )
};