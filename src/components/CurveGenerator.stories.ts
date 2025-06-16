import type { Meta, StoryObj } from '@storybook/vue3';
import CurveGenerator from '../components/CurveGenerator.vue';

const meta = {
  title: 'Components/CurveGenerator',
  component: CurveGenerator,
  argTypes: {
    spread: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Controls horizontal position of the curve control point (0–100)',
    },
  },
  args: {
    spread: 50,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CurveGenerator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Center Arch',
  args: {
    spread: 50,
  },
};

export const LeftSkewed: Story = {
  name: 'Left Curve',
  args: {
    spread: 20,
  },
};

export const RightSkewed: Story = {
  name: 'Right Curve',
  args: {
    spread: 80,
  },
};

export const DangerZone: Story = {
  name: 'Below Threshold (Red Slider)',
  args: {
    spread: 25,
  },
};

export const Playground: Story = {
  name: 'Interactive Playground',
  render: (args) => ({
    components: { CurveGenerator },
    setup() {
      return { args };
    },
    template: `
      <div style="text-align: center;">
        <CurveGenerator v-bind="args" />
        <input 
          type="range" 
          min="0" 
          max="100" 
          v-model="args.spread" 
          style="margin-top: 1rem; width: 200px;"
        />
      </div>
    `,
  }),
  args: {
    spread: 50,
  },
};
