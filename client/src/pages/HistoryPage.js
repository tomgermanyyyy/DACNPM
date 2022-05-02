import React from 'react';
import { History, Sidebar } from '../components';
import '../styles/History.css';

function HistoryPage() {
  return (
    <div className="history-container">
      <Sidebar />
      <History />
    </div>
  );
}

export default HistoryPage;
