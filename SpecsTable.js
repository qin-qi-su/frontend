import React from 'react';

export default function SpecsTable({ selected }) {
  if (!selected) return <div>No selection</div>;
  return (
    <section style={{ background: 'rgba(255,255,255,0.03)', padding: 12, borderRadius: 12 }}>
      <h3 style={{ marginTop: 0 }}>Details</h3>
      <div>
        <img src={selected.image} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
        <h4>{selected.name}</h4>
        <div style={{ color: '#9aa7b2' }}>Price: ${selected.price} • Range: {selected.range} km</div>
        <table style={{ width: '100%', marginTop: 8 }}>
          <tbody>
            <tr><td style={{ color: '#9aa7b2' }}>Battery</td><td style={{ textAlign: 'right' }}>{selected.battery}</td></tr>
            <tr><td style={{ color: '#9aa7b2' }}>Motor</td><td style={{ textAlign: 'right' }}>{selected.motor}</td></tr>
            <tr><td style={{ color: '#9aa7b2' }}>Top Speed</td><td style={{ textAlign: 'right' }}>{selected.speed}</td></tr>
            <tr><td style={{ color: '#9aa7b2' }}>Charge Time</td><td style={{ textAlign: 'right' }}>{selected.charging} h</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
