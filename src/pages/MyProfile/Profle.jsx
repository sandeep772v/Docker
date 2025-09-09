import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    empId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box className="flex justify-center items-center bg-gray-100">
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          // maxWidth: 700,
          borderRadius: "16px",
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Employee Information
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Full Name */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                Full Name
              </Typography>
              <TextField
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                Email ID
              </Typography>
              <TextField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>


            {/* Address */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                Address
              </Typography>
              <TextField
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
                multiline
                rows={2}
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                Phone Number
              </Typography>
              <TextField
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>

            {/* Employee ID */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                Employee ID
              </Typography>
              <TextField
                name="empId"
                value={formData.empId}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="outlined" 
                fullWidth
                sx={{
                  mt: 4,
                  borderRadius: "12px",

                  border: "2px solid",
                  borderImageSlice: 1,
                  borderWidth: "2px",
                  borderImageSource: "#00c853", // green gradient border
                  background: "transparent",

                }}
              >
                Save
              </Button>
            </Grid>

          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
