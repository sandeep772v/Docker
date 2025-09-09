import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Stack,
} from "@mui/material";
import { validateRegistration } from "../../utils/validation";
import RegisterImg from "../../assets/register.svg";

export default function SuperAdminRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRegistration(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Registration Successful!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",

      }}
    >
      {/* Left Side - Image */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
        }}
      >
        <img
          src={RegisterImg}
          alt="Register"
          style={{ width: "70%", maxWidth: "500px" }}
        />
      </Box>

      {/* Right Side - Mild Green Background with Centered Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // bgcolor: "#a8d5ba", // mild green
          p: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold", color: "#064420" }}
          >

            SuperAdmin Register Here
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2}>
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                size="small"
                error={!!errors.fullName}
                helperText={errors.fullName}
                required
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                size="small"
                error={!!errors.email}
                helperText={errors.email}
                required
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                size="small"
                error={!!errors.password}
                helperText={errors.password}
                required
              />

              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                size="small"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                required
              />

              <TextField
                
                label="Role"
                name="role"
                value="superadmin"
                fullWidth
                size="small"
                
                required
              >
                
              </TextField>
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <a
                  href="/#/superadmin/login"
                  style={{
                    textDecoration: "none",
                    color: "#185a9d",
                    fontWeight: "bold",
                  }}
                >
                  Login Here
                </a>
              </Typography>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: "bold",
                  bgcolor: "#064420",
                  "&:hover": { bgcolor: "#046d36" },
                }}
              >
                Register
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
