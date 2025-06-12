/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import CurveGraph from '../components/CurveGraph.vue';

describe('CurveGraph', () => {
  it('renders the polyline for sine function', async () => {
    const { getByRole, container } = render(CurveGraph, {
      props: {
        scale: 1,
        functionName: 'sin',
      },
    });

    // ✅ Assert that the <polyline> exists
    const polyline = container.querySelector('polyline');
    expect(polyline).toBeTruthy();

    // ✅ Optionally, check if points attribute is populated
    const pointsAttr = polyline?.getAttribute('points');
    expect(pointsAttr).toBeTruthy();
    expect(pointsAttr?.split(' ').length).toBeGreaterThan(10); // should have many points
  });
});
