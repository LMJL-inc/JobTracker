import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddJob from '../components/AddJob';
import JobTable from '../components/JobTable';

export default function MainContainer(props) {
  // const [page, setPage] = useState('AddJob');
  return (
    // <JobTable />
    // {page === 'AddJob' ? <AddJob /> : <JobTable />}
    // <AddJob />
    <Routes>
      <Route
        path="/"
        element={<AddJob />}
      />
      <Route
        path="/applied"
        element={<JobTable status="Applied" />}
      />
      <Route
        path="/interviewing"
        element={<JobTable status="Interviewing" />}
      />
      <Route
        path="/denied"
        element={<JobTable status="Denied" />}
      />
      <Route
        path="/offers"
        element={<JobTable status="Offers" />}
      />
    </Routes>
  );
}
