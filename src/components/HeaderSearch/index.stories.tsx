import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderSearch, { HeaderSearchProps } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/HeaderSearch',
  component: HeaderSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HeaderSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderSearch> = (args) => <HeaderSearch {...args} />;

export const Base = Template.bind({});

Base.args = {
  placeholder: '站内搜索',
  defaultValue: 'umi ui',
  className: `aaaa bbbb`,
  value: 'aaaa',
  defaultVisible: true,
  visible: true,
  options: [
    { label: 'Reactjs Startkit', value: 'Reactjs Startkit' },
    {
      label: 'Reactjs Startkit',
      value: 'Reactjs Startkit',
    },
    {
      label: 'Pro Table',
      value: 'Pro Table',
    },
    {
      label: 'Pro Layout',
      value: 'Pro Layout',
    },
  ],
  onSearch: (value) => console.log(value),
  onChange: (value) => console.log(value),
  onVisibleChange: (b) => console.log(b),
} as HeaderSearchProps;
