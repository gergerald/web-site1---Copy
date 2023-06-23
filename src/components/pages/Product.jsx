import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ProductList = () => {
  // Sample data for demonstration
  const departmentData = [
    { dept_name: 'Cardiology', dept_location: 'Floor 2', facilities: 'MRI, CT Scan' },
    { dept_name: 'Pediatrics', dept_location: 'Floor 3', facilities: 'X-ray, Ultrasound' },
    // Add more department data here
  ];

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>List of Departments</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department Name</TableCell>
              <TableCell>Department Location</TableCell>
              <TableCell>Facilities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departmentData.map((department) => (
              <TableRow key={department.dept_name}>
                <TableCell>{department.dept_name}</TableCell>
                <TableCell>{department.dept_location}</TableCell>
                <TableCell>{department.facilities}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
