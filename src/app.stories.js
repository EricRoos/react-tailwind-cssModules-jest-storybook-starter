import React from 'react';

import { TestComponent  } from './main';

export default {
  title: 'Main/TestComponent',
  component: TestComponent,
};

const Template = (args) => <TestComponent {...args} />;

export const Example = Template.bind({});
Example.args = {
  msg: 'foo'
};
