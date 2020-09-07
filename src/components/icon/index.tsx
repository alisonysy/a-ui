import React, { ReactElement } from "react";
import styled from "styled-components";
import { icons } from "../shared/icons";
import { rotate } from "../shared/animation";

export interface IconProps {
  icon: keyof typeof icons;
  block?: boolean;
  width?: number;
  color?: string;
  spin?: boolean;
  rotate?: number;
}

const Svg = styled.svg<IconProps>`
  display: ${(props) => (props.block? 'block' : 'inline-block')};
  width: ${(props) => (props.width? (props.width + 'px') : '24px')};
  transform: rotate(${(props) => (props.rotate)}deg);
  ${(props) => (
    props.spin? `animation: ${rotate} 2s linear infinite;` : null
  )}
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: ${(props) => props.color};
`;

export function Icon(props: IconProps): ReactElement {
  const { block, icon, color, width, spin, rotate } = props;
  return (
    <Svg
      viewBox="0 0 670 512"
      width={width? width : 24}
      block={block}
      spin={spin? spin : false}
      rotate={rotate? rotate: 0}
      {...props}
    >
      <Path d={icons[icon]} color={color} />
    </Svg>
  )
};

Icon.defaultProps = {
  block: false,
  width: 24,
  color: "black",
  spin: false,
  rotate: 0
};