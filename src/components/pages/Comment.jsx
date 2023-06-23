import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Checkups = () => {
  // Sample data for demonstration
  const checkupData = [
    { doc_no: 1, pat_no: 1001, diagnosis: 'Fever', status: 'In Progress', treatment: 'Medication', checkup_date: '2023-06-21' },
    { doc_no: 2, pat_no: 1002, diagnosis: 'Headache', status: 'Completed', treatment: 'Rest', checkup_date: '2023-06-20' },
    // Add more checkup data here
  ];

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>On-going Checkups</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doc No</TableCell>
              <TableCell>Pat No</TableCell>
              <TableCell>Diagnosis</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Treatment</TableCell>
              <TableCell>Checkup Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkupData.map((checkup) => (
              <TableRow key={checkup.doc_no}>
                <TableCell>{checkup.doc_no}</TableCell>
                <TableCell>{checkup.pat_no}</TableCell>
                <TableCell>{checkup.diagnosis}</TableCell>
                <TableCell>{checkup.status}</TableCell>
                <TableCell>{checkup.treatment}</TableCell>
                <TableCell>{checkup.checkup_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Checkups;
