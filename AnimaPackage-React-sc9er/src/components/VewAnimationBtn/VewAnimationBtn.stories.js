import { VewAnimationBtn } from ".";

export default {
  title: "Components/VewAnimationBtn",
  component: VewAnimationBtn,
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
    rectangleClassName: {},
  },
};
