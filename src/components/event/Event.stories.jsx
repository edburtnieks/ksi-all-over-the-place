import React from "react"

import { Event } from "./Event"

export default {
  title: "Event",
  component: Event,
};

const Template = (args) => <Event {...args} />;

export const Available = Template.bind({});
Available.args = {
  isSoldOut: false,
};

export const SoldOut = Template.bind({});
SoldOut.args = {
  isSoldOut: true,
};
