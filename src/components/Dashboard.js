import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import Pagination from 'react-paginate';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import 'tailwindcss/tailwind.css';
import Papa from 'papaparse';
import data from '../Data.json';

const Dashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const recordsPerPage = 50;
  const pageCount = Math.ceil(data.education.length / recordsPerPage);

  const [startIndex, setStartIndex] = useState(currentPage * recordsPerPage);
  const [endIndex, setEndIndex] = useState(startIndex + recordsPerPage);


  const filteredData = data.education.filter((record) =>
    record.school_name.toLowerCase().includes(searchText.toLowerCase()) ||
    record.degree.toLowerCase().includes(searchText.toLowerCase()) ||
    record.school_location.toLowerCase().includes(searchText.toLowerCase()) 
  );

  const handleChangePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDownload = () => {
    const csvData = Papa.unparse(filteredData);

    const blob = new Blob([csvData], { type: 'text/csv' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Download clicked');
  };

  useEffect(() => {
    const newStartIndex = currentPage * recordsPerPage;
    const newEndIndex = newStartIndex + recordsPerPage;

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [currentPage, recordsPerPage]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            endAdornment: <MdSearch />,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownload}
        >
          Download CSV
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>School Location</TableCell>
              <TableCell>Degree</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(startIndex, endIndex).map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.school_location}</TableCell>
                <TableCell>{record.degree}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-4">
        <Pagination
          pageCount={pageCount}
          onPageChange={handleChangePage}
          containerClassName="flex justify-center space-x-10"
          activeClassName="bg-blue-500 text-white"
          pageClassName="mx-1"
        />
      </div>
    </div>
  );
};

export default Dashboard;
