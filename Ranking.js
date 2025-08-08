import React from 'react';

export default function Ranking({ products, selected, setSelected, setSearchQuery }) {
  return (
    <aside style={{ background: 'rgba(255,255,255,0.03)', padding: 12, borderRadius: 12 }}>
      <input
        type="text"
        placeholder="Search model"
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: '100%', padding: 8, borderRadius: 8, border: 'none', marginBottom: 8 }}
      />
      <div style={{ maxHeight: 600, overflow: 'auto' }}>
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              padding: 8,
              borderRadius: 8,
              background: selected && selected.id === p.id ? 'rgba(0,200,255,0.06)' : 'transparent',
              cursor: 'pointer',
            }}
          >
            <img src={p.image} style={{ width: 84, height: 56, objectFit: 'cover', borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: '#9aa7b2' }}>{p.brand} • ${p.price}</div>
            </div>
            <div
              style={{
                background: 'linear-gradient(90deg,#00f0ff,#7b61ff)',
                padding: '6px 10px',
                borderRadius: 8,
                color: '#01151a',
                fontWeight: 700,
              }}
            >
              {(p.total_score || 0).toFixed(1)}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
