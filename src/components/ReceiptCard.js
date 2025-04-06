import React from 'react';

const ReceiptCard = ({ receipt }) => {
  return (
    <div className="receipt-card">
      <h2>Merchant: {receipt.merchant}</h2>
      <p>Date: {receipt.date}</p>
      <p>Total: ${receipt.total}</p>
      <h4>Items:</h4>
      <ul>
        {receipt.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <details>
        <summary>Raw OCR Text</summary>
        <pre>{receipt.raw_text}</pre>
      </details>
    </div>
  );
};

export default ReceiptCard;
