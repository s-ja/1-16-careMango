import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './index.css';
import Login from './routes/login';
import CheckSchedule from './routes/checkSchedule';
import CreateCounseling from './routes/counseling/createCounseling';
import CheckCounseling from './routes/counseling/checkCounseling';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/schedule/:scheduleId" element={<CheckSchedule />} />
          <Route path="/schedule/:counselingId" element={<CheckCounseling />} />
          <Route path="/schedule/createCounseling" element={<CreateCounseling />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
