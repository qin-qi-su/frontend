import React, { useState, useEffect } from 'react';
import Ranking from './Ranking';
import RadarChart from './RadarChart';
import ScatterChart from './ScatterChart';
import SpecsTable from './SpecsTable';

export default function App() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { fetchProducts(); }, []);

  async function fetchProducts() {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
      if (data.length > 0) setSelected(data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#071021', minHeight: '100vh', color: '#e6f6ff' }}>
      <div style={{ maxWidth: 1200, margin: '24px auto', padding: 20 }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <h1 style={{ margin: 0 }}>E-Scooter Comparison Studio</h1>
            <div style={{ color: '#9aa7b2' }}>Interactive prototype</div>
          </div>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr 360px', gap: 16 }}>
          <Ranking products={filteredProducts} selected={selected} setSelected={setSelected} setSearchQuery={setSearchQuery} />
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: 12, borderRadius: 12 }}>
            <RadarChart selected={selected} products={products} />
            <ScatterChart products={products} selected={selected} />
          </div>
          <SpecsTable selected={selected} />
        </div>
      </div>
    </div>
  );
}
