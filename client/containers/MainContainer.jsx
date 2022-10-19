import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddJob from '../components/AddJob';
import JobTable from '../components/JobTable';
import Login from '../components/Login';
import StatusContainer from './StatusContainer';

export default function MainContainer(props) {
  // const [page, setPage] = useState('AddJob');
  return (
    // <JobTable />
    // {page === 'AddJob' ? <AddJob /> : <JobTable />}
    // <AddJob />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/add"
        element={(
          <>
            <StatusContainer />
            <AddJob />
          </>
)}
      />
      <Route
        path="/applied"
        element={(
          <>
            <StatusContainer status="applied" />
            <JobTable status="applied" />
          </>
)}
      />
      <Route
        path="/interviewing"
        element={(
          <>
            <StatusContainer status="interviewing" />
            <JobTable status="interviewing" />
          </>
)}
      />
      <Route
        path="/denied"
        element={(
          <>
            <StatusContainer status="denied" />
            <JobTable status="denied" />
          </>
)}
      />
      <Route
        path="/offers"
        element={(
          <>
            <StatusContainer status="offers" />
            <JobTable status="offers" />
          </>
)}
      />
    </Routes>
  );
}
