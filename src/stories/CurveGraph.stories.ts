import type { Meta, StoryObj } from '@storybook/vue3';
import CurveGraph from '../components/CurveGraph.vue';

const meta = {
  title: 'Components/CurveGraph',
  component: CurveGraph,
  argTypes: {
    scale: {
      control: { type: 'number', min: 0.1, max: 5, step: 0.1 },
      description: 'Controls the scaling/stretching of the curve',
    },
    functionName: {
      control: { type: 'select' },
      options: ['sin', 'cos', 'log', 'exp'],
      description: 'Type of mathematical curve to render',
    },
  },
  args: {
    scale: 1,
    functionName: 'sin',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CurveGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SineCurve: Story = {
  args: {
    functionName: 'sin',
    scale: 1,
  },
};

export const CosineCurve: Story = {
  args: {
    functionName: 'cos',
    scale: 1,
  },
};

export const LogarithmicCurve: Story = {
  args: {
    functionName: 'log',
    scale: 1,
  },
};

export const ExponentialCurve: Story = {
  args: {
    functionName: 'exp',
    scale: 1,
  },
};

export const ZoomedIn: Story = {
  args: {
    functionName: 'sin',
    scale: 3,
  },
};

export const ZoomedOut: Story = {
  args: {
    functionName: 'cos',
    scale: 0.5,
  },
};
