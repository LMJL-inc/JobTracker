import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddJob from '../components/AddJob';
import Header from '../components/Header';
import JobTable from '../components/JobTable';
import Login from '../components/Login';
import StatusContainer from './StatusContainer';

export default function MainContainer(props) {
  return (
    // <JobTable />
    // {page === 'AddJob' ? <AddJob /> : <JobTable />}
    // <AddJob />
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <Header session={false} />
            <Login />
          </>
)}
      />
      <Route
        path="/add"
        element={(
          <>
            <Header session />
            <StatusContainer />
            <AddJob />
          </>
)}
      />
      <Route
        path="/applied"
        element={(
          <>
            <Header session />
            <StatusContainer status="applied" />
            <JobTable status="applied" />
          </>
)}
      />
      <Route
        path="/interviewing"
        element={(
          <>
            <Header session />
            <StatusContainer status="interviewing" />
            <JobTable status="interviewing" />
          </>
)}
      />
      <Route
        path="/denied"
        element={(
          <>
            <Header session />
            <StatusContainer status="denied" />
            <JobTable status="denied" />
          </>
)}
      />
      <Route
        path="/offers"
        element={(
          <>
            <Header session />
            <StatusContainer status="offers" />
            <JobTable status="offers" />
          </>
)}
      />
    </Routes>
  );
}
