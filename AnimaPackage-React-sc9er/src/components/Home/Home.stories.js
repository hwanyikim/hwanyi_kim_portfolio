import { Home } from ".";

export default {
  title: "Components/Home",
  component: Home,
  argTypes: {
    property1: {
      options: ["delayed-state", "main"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "delayed-state",
    className: {},
  },
};
