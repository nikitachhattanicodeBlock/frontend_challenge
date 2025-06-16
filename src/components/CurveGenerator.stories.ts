import type { Meta, StoryObj } from '@storybook/vue3'
import CurveGenerator from '../components/CurveGenerator.vue'

const meta = {
  title: 'Components/CurveGenerator',
  component: CurveGenerator,
  argTypes: {
    spread: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Controls the skew of the curve (0 = left, 100 = right)',
    },
  },
  args: {
    spread: 50,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dynamic SVG curve that reacts to a `spread` value. Below 20%, it enters a danger state.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CurveGenerator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default (Center Curve)',
  args: {
    spread: 50,
  },
}

export const DangerZone: Story = {
  name: 'Danger State (Below 20%)',
  args: {
    spread: 15,
  },
}
