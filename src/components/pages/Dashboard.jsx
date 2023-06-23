import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Dashboard = () => {
  // Sample data for demonstration
  const doctorData = [
    { doc_no: 1, doc_name: 'Dr. John Doe', ph_no: '123-456-7890', qualification: 'MBBS', address: '123 Street, City' },
    { doc_no: 2, doc_name: 'Dr. Jane Smith', ph_no: '987-654-3210', qualification: 'MD', address: '456 Avenue, Town' },
    // Add more doctor data here
  ];

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>Doctor's List</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doc No</TableCell>
              <TableCell>Doc Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Qualification</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctorData.map((doctor) => (
              <TableRow key={doctor.doc_no}>
                <TableCell>{doctor.doc_no}</TableCell>
                <TableCell>{doctor.doc_name}</TableCell>
                <TableCell>{doctor.ph_no}</TableCell>
                <TableCell>{doctor.qualification}</TableCell>
                <TableCell>{doctor.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
