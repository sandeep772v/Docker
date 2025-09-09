import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Box,
    Grid,
    Paper,
    MenuItem,
} from "@mui/material";

export default function EmployeeRegisterForm() {
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
                    Employee Registeration Form
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>

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
                        {/* Password */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                                Password
                            </Typography>
                            <TextField
                                type="password"
                                name="password"
                                value={formData.password || ""}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                variant="outlined"
                            />
                        </Grid>
                        {/* Confirm Password */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                                Confirm Password
                            </Typography>
                            <TextField
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword || ""}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                variant="outlined"
                                error={formData.confirmPassword && formData.confirmPassword !== formData.password}
                                helperText={
                                    formData.confirmPassword && formData.confirmPassword !== formData.password
                                        ? "Passwords do not match"
                                        : ""
                                }
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
                                rows={1}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                                Department
                            </Typography>
                            <TextField
                                select
                                name="dept"
                                value={formData.dept || ""}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                variant="outlined"
                                SelectProps={{
                                    MenuProps: {
                                        PaperProps: {
                                            sx: {
                                                maxHeight: 150, 
                                                fontSize: "0.875rem", 
                                            },
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="">Select Department</MenuItem>
                                <MenuItem value="HR">HR</MenuItem>
                                <MenuItem value="Finance">Finance</MenuItem>
                                <MenuItem value="IT">IT</MenuItem>
                                <MenuItem value="Sales">Sales</MenuItem>
                            </TextField>
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
                                    borderImageSource: "green", // green gradient border
                                    background: "transparent",

                                }}
                            >
                                Register
                            </Button>
                        </Grid>

                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}
