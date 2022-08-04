import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Nav from "./nav";

export default {
  title: "Nav",
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Primary: ComponentStory<typeof Nav> = () => <Nav />;
