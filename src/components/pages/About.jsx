import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


const Dashboard = () => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, formData]);
    setFormData({});
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <Typography variant="h4" component="h2" sx={{ mt: 2 }}>
          Admission
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
  label="Pat No"
  fullWidth
  id="pat_no" // Update the id attribute to match your database column name
  placeholder="Pat No"
  value={formData.patNo || ''}
  onChange={(e) => handleInputChange(e, 'patNo')}
  sx={{ mt: 3 }}
/>

          <TextField
            type="date"
            label="Admitted On"
            fullWidth
            id="admtd_on"
            placeholder="Admitted On"
            value={formData.admtdOn || ''}
            onChange={(e) => handleInputChange(e, 'Admitted On')}
            sx={{ mt: 3 }}
          />
          <TextField
            
            label="Condition On"
            fullWidth
            id="cond_on"
            placeholder="Condition On"
            value={formData.condOn || ''}
            onChange={(e) => handleInputChange(e, 'Condition On')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Advanced Payment"
            fullWidth
            id="adv_pymt"
            placeholder="Advanced Payment"
            value={formData.advPtmt || ''}
            onChange={(e) => handleInputChange(e, 'adv_pymt')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Mode of Payment"
            fullWidth
            id="mode_pymt"
            placeholder="Mode of Payment"
            value={formData.modePymt || ''}
            onChange={(e) => handleInputChange(e, 'mode_pymt')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Room No"
            fullWidth
            id="room_no"
            placeholder="Room No"
            value={formData.roomNo || ''}
            onChange={(e) => handleInputChange(e, 'room_no')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Doctor No"
            fullWidth
            id="doc_no"
            placeholder="Doctor No"
            value={formData.docNo || ''}
            onChange={(e) => handleInputChange(e, 'doc_no')}
            sx={{ mt: 3 }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Submit
          </Button>
        </form>

        {submittedData.length > 0 && (
          <div sx={{ mt: 4 }}>
            <Typography variant="h5" component="h3">
              Entered Values:
            </Typography>
            <Table sx={{ mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Pat No</TableCell>
                  <TableCell>Admitted On</TableCell>
                  <TableCell>Condition On</TableCell>
                  <TableCell>Advanced Payment</TableCell>
                  <TableCell>Mode of Payment</TableCell>
                  <TableCell>Room No</TableCell>
                  <TableCell>Doctor No</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {submittedData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.patNo}</TableCell>
                    <TableCell>{data.admtdOn}</TableCell>
                    <TableCell>{data.condOn}</TableCell>
                    <TableCell>{data.advPtmt}</TableCell>
                    <TableCell>{data.modePymt}</TableCell>
                    <TableCell>{data.roomNo}</TableCell>
                    <TableCell>{data.docNo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;