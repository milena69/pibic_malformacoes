import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard {id}</h1>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default Dashboard;
