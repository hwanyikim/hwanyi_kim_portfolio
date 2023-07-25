import { SendingEmailButton } from ".";

export default {
  title: "Components/SendingEmailButton",
  component: SendingEmailButton,
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
  },
};
