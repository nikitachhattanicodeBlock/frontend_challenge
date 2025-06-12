/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import CurveGraph from '../components/CurveGraph.vue';

describe('CurveGraph', () => {
  it('renders the polyline for sine function', async () => {
    const { getByRole } = render(CurveGraph, {
      // You can pass props or slots here if needed
    });

    // Example assertion
    //const svg = getByRole('img'); // assuming you gave role="img" or similar
    // expect(svg).toBeTruthy();
  });
});
