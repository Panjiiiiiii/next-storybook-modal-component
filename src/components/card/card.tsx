import React, { FC, HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'elevation' | 'outlined';
  backgroundColor: '#fff';
  fontColor:'#000';
  classes?: string;
  label: string;
}
export const Card: FC<CardProps> = ({ label, fontColor='#000',backgroundColor='#fff', variant = 'elevation', children, classes, ...rest }) => {
  return (
    <div
      className={[
        classes,
        `rounded-xl p-2`,
        `${variant === 'elevation' ? 'shadow-md' : 'border-2 border-solid'}`
      ].join(' ')}
      {...rest}>
      {children}
      <pre>{label}</pre>
      <style jsx>{`
        div {
          background-color: ${backgroundColor};
          color: ${fontColor};
        }
      `}</style>
    </div>
  );
};