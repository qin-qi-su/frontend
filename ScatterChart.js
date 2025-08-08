import React from 'react';
import { Scatter } from 'react-chartjs-2';

export default function ScatterChart({ products, selected }) {
  const scatterData = {
    datasets: [{
      label: 'Price vs Score',
      data: products.map(p => ({ x: p.price, y: p.total_score || 0, id: p.id, name: p.name })),
      backgroundColor: products.map(p => selected && p.id === selected.id ? '#00f0ff' : '#cfeff4'),
      pointRadius: products.map(p => selected && p.id === selected.id ? 7 : 4)
    }]
  };

  return (
    <div style={{ height: 240, marginTop: 12 }}>
      <h3 style={{ marginTop: 0 }}>Price vs Total Score</h3>
      <div style={{ height: '85%' }}>
        <Scatter data={scatterData} options={{
          scales: {
            x: { title: { display: true, text: 'Price' } },
            y: { title: { display: true, text: 'Score' } }
          },
          plugins: {
            tooltip: { callbacks: { label(ctx) { const d = ctx.raw; return `${d.name}: $${d.x} — ${d.y.toFixed(1)}`; } } }
          }
        }} />
      </div>
    </div>
  );
}
