/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import CurveGraph from '../components/CurveGraph.vue';

const renderAndCheckPolyline = async (props: { scale: number; functionName: 'sin' | 'cos' | 'log' | 'exp' }) => {
  const { container } = render(CurveGraph, { props });

  const polyline = container.querySelector('polyline');
  expect(polyline).toBeTruthy();

  const pointsAttr = polyline?.getAttribute('points');
  expect(pointsAttr).toBeTruthy();
  expect(pointsAttr?.split(' ').length).toBeGreaterThan(10);
};

describe('CurveGraph', () => {
  it('renders polyline for sine function', async () => {
    await renderAndCheckPolyline({ scale: 1, functionName: 'sin' });
  });

  it('renders polyline for cosine function', async () => {
    await renderAndCheckPolyline({ scale: 1, functionName: 'cos' });
  });

  it('renders polyline for logarithmic function', async () => {
    await renderAndCheckPolyline({ scale: 1, functionName: 'log' });
  });

  it('renders polyline for exponential function', async () => {
    await renderAndCheckPolyline({ scale: 1, functionName: 'exp' });
  });

  it('handles larger scale values', async () => {
    await renderAndCheckPolyline({ scale: 5, functionName: 'sin' });
  });

  it('renders something even if scale is 0', async () => {
    await renderAndCheckPolyline({ scale: 0, functionName: 'cos' });
  });
});
