import React from 'react';
import { Radar } from 'react-chartjs-2';

export default function RadarChart({ selected, products }) {
  const radarLabels = ['Range', 'Power', 'Charging', 'Safety', 'Smart'];
  const radarDatasets = (selected ? [selected, ...products.filter(p => p.id !== selected.id).slice(0, 2)] : products.slice(0, 3)).map((p, i) => ({
    label: p.name,
    data: [p.range_score || p.range, p.power_score || p.speed, p.charge_score || (10 - p.charging), p.safety_score || 50, p.smart_score || 50],
    backgroundColor: i === 0 ? 'rgba(0,200,255,0.2)' : i === 1 ? 'rgba(123,97,255,0.12)' : 'rgba(255,200,60,0.12)',
    borderColor: i === 0 ? 'rgba(0,200,255,1)' : i === 1 ? 'rgba(123,97,255,1)' : 'rgba(255,200,60,1)'
  }));

  const radarData = { labels: radarLabels, datasets: radarDatasets };

  return (
    <div style={{ height: 320 }}>
      <h3 style={{ marginTop: 0 }}>Performance Radar</h3>
      <div style={{ height: '90%' }}>
        <Radar data={radarData} />
      </div>
    </div>
  );
}
