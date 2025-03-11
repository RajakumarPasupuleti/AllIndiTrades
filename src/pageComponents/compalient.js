
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  TextField,
  Chip,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import moment from "moment";

const ComplaintBoard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Fetch complaints (replace with actual API)
  const fetchComplaints = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments"); // Dummy API
      const latestComplaints = response.data.slice(0, 20).map((item, index) => ({
        id: index + 1,
        user: `User ${index + 1}`,
        complaint: item.body,
        status: ["Pending", "Resolved", "In Progress"][index % 3], // Sample statuses
        date: moment().subtract(index, "days").format("YYYY-MM-DD"), // Simulated dates
      }));
      setComplaints(latestComplaints);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      setLoading(false);
    }
  };

  // Search filter
  const filteredComplaints = complaints.filter((complaint) =>
    complaint.complaint.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <Typography variant="h4" className="text-center text-yellow-400 mb-6">
        📢 Complaint Board
      </Typography>

      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Search complaints..."
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      />

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex justify-center">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#222", color: "white" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>ID</TableCell>
                <TableCell style={{ color: "white" }}>User</TableCell>
                <TableCell style={{ color: "white" }}>Complaint</TableCell>
                <TableCell style={{ color: "white" }}>Status</TableCell>
                <TableCell style={{ color: "white" }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredComplaints
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((complaint) => (
                  <TableRow key={complaint.id}>
                    <TableCell>{complaint.id}</TableCell>
                    <TableCell>{complaint.user}</TableCell>
                    <TableCell>{complaint.complaint}</TableCell>
                    <TableCell>
                      <Chip
                        label={complaint.status}
                        color={
                          complaint.status === "Resolved"
                            ? "success"
                            : complaint.status === "Pending"
                            ? "error"
                            : "warning"
                        }
                      />
                    </TableCell>
                    <TableCell>{complaint.date}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredComplaints.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
      />
    </div>
  );
};

export default ComplaintBoard;
