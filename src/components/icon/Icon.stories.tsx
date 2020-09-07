import React from 'react';
import { Icon, IconProps } from "./index";
import { withKnobs, color, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { icons } from "../shared/icons";
import * as customStyle from "../shared/styles";

export default {
  title: 'Components/Icon',
  component: Icon,
  decorators: [withKnobs]
};

export const knobsIcon = () => (
  <Icon 
    icon={select<IconProps["icon"]>(
      "icons",
      Object.keys(icons) as IconProps["icon"][],
      "user"
    )}
    color={color("color", "black")}
  />
);

const Meta = styled.div`
  color: ${customStyle.color.mediumlight};
  font-size: ${customStyle.typography.size.s1}px;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const Item = styled.li`
  font-family: Helvetica;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;
  padding: 0 7.5px 20px;
  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const labels = () => (
  <>
    There are {Object.keys(icons).length} icons.
    <List>
      {Object.keys(icons).map((key) => (
        <Item key={key}>
          <Icon icon={key as keyof typeof icons} />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
);