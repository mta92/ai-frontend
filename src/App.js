import React, { useState } from 'react';
import ReceiptCard from './components/ReceiptCard';
import './App.css';

function App() {
  const [receiptData, setReceiptData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/upload`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setReceiptData(data);
    } catch (err) {
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>AI Receipt Scanner</h1>
      <input type="file" onChange={handleUpload} />
      {loading && <p>Analyzing your receipt...</p>}
      {receiptData && <ReceiptCard receipt={receiptData} />}
    </div>
  );
}

export default App;
