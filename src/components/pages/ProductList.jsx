import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Analytics = () => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/fetchData.php');
      const data = await response.json();
      setSubmittedData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
          Discharge
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Patient Number"
            fullWidth
            id="pat_no"
            placeholder="Patient Number"
            value={formData.pat_no || ''}
            onChange={(e) => handleInputChange(e, 'pat_no')}
            sx={{ mt: 3 }}
          />
          {/* Rest of the form fields */}

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, alignSelf: 'center' }}>
            Submit
          </Button>
        </form>

        {!isLoading && submittedData.length > 0 && (
          <div sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h5" component="h3">
              Entered Values:
            </Typography>
            <Table sx={{ mt: 2, margin: '0 auto' }}>
              <TableHead>
                {/* Table header */}
              </TableHead>
              <TableBody>
                {submittedData.map((data, index) => (
                  <TableRow key={index}>
                    {/* Table cells */}
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

export default Analytics;
