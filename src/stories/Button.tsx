import React from 'react';
import './button.css';
import styled from 'styled-components';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export const BaseButton: React.FC<ButtonProps> = ( props: ButtonProps ) => {
  console.log('all props passed is', props)
  return (
    <button>{props.label}</button>
  )
};

export const AnotherButton = styled.button.attrs({ className: 'foo' })`
  border-radius: 50%;
  border: 1px solid gold;
  &.foo {
    color: red
  }
`;