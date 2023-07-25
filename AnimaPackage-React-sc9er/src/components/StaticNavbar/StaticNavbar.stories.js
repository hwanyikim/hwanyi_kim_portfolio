import { StaticNavbar } from ".";

export default {
  title: "Components/StaticNavbar",
  component: StaticNavbar,
  argTypes: {
    property1: {
      options: ["default-state"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default-state",
    className: {},
  },
};
