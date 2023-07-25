import { NavbarMenu } from ".";

export default {
  title: "Components/NavbarMenu",
  component: NavbarMenu,
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
    text: "Home",
  },
};
