import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function AdminLogin() {
  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/dashboard");
    };
  
  return (
    <Box sx={{ height: "100vh", width: "100%", position: "relative" }}>
      {/* Top Green Background */}
      <Box
        sx={{
           height: { xs: "40%", sm: "45%", md: "50%" },
          height: "50%",
          background: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontFamily: "cursive",
            fontWeight: 500,
             textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "1rem", md: "2rem" }, 
            position: "absolute",
            top: { xs: "10px", sm: "15px" }
          }}
        >
          Admin Management System
        </Typography>
      </Box>
      <Box
        sx={{
          height: { xs: "60%", sm: "55%", md: "50%" },
          backgroundColor: "#f5f5f5",
        }}
      />
       <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "400px", md: "360px" }, 
        }}
      >
        <Card sx={{ borderRadius: 3, boxShadow: 6 }}>
          <CardContent>
            <Box textAlign="center" mb={2}>
              <PersonIcon sx={{ fontSize: { xs: 35, sm: 40 }, color: "green" }} />
              <Typography
                variant="h6"
                fontWeight="bold"
                mt={1}
                fontSize={{ xs: "1rem", sm: "1.2rem" }}
              >
                Sign In 
              </Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* Inputs */}
            <TextField
              label="Username / Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{" "}
              <a
                href="/#/admin/register"
                style={{
                  textDecoration: "none",
                  color: "#185a9d",
                  fontWeight: "bold",
                }}
              >
                Register Here
              </a>
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: 1,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                backgroundColor: "green",
                "&:hover": { backgroundColor: "green" },
              }} onClick={handleClick}
            >
              Log In
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
