import { Menu } from ".";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    property1: {
      options: ["default-state", "hover-state"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default-state",
    className: {},
    homeClassName: {},
    text: "Home",
  },
};
