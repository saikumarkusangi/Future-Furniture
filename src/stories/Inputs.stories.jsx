import React from "react";

import { Input } from "components";

export default {
  title: "Future Furniture/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
