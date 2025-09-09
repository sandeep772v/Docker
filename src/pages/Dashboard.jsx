import React from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import ReminderCard from "../components/Card";
import { Inbox } from "lucide-react";
import { Users, CalendarDays, Building, Clock, FileText, Home } from "lucide-react";
import {
  Typography,

  Card,
  CardContent,
  Box,

} from "@mui/material";

const Dashboard = () => {

  const navigate = useNavigate();
  const users = [
    { name: "Vanisri", image: "https://i.pravatar.cc/40?img=1" },
    { name: "Niharika", image: "https://i.pravatar.cc/40?img=2" },
    { name: "Preethi", image: "https://i.pravatar.cc/40?img=3" },
    { name: "Sandheep", image: "https://i.pravatar.cc/40?img=4" },
    { name: "Anugeethiks", image: "https://i.pravatar.cc/40?img=5" },
    { name: "Sobhana", image: "https://i.pravatar.cc/40?img=6" },
  ];

  const handleClick = () => {
    navigate("/adminDashboard/requestTable")
  }
  return (
    <>
      <h3 className="text-xl font-semibold mb-5">Dashboard</h3>
      {/* <p className="text-sm  mb-5 text-gray-500 flex items-center gap-2"><Home size={20} /> Home</p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Projects"
          value="18"
          // icon={Users}
          message="Increased From last month"
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
          iconSize="w-3 h-3"
        />
        <StatCard
          title="Ended Projects"
          value="5"
          // icon={CalendarDays}
          message="Increased From last month"
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
          iconSize="w-5 h-5"
        />
        <StatCard
          title="Running Projects"
          value="10"
          // icon={Building}
          message="Increased From last month"
          iconBg="bg-pink-100"
          iconColor="text-pink-600"
          iconSize="w-5 h-5"
        />
        <StatCard
          title="Pending Projects"
          value="3"
          //  icon={Clock}     
          message="on Discuss"
          iconBg="bg-yellow-100"
          iconColor="text-yellow-600"
          iconSize="w-5 h-5"
        />
      </div>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 ">
        <ReminderCard />
        <div className="max-w-sm bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 transition-all duration-300 ease-in-out 
           hover:scale-105 hover:shadow-2xl hover:shadow-green-600">
          {/* Buttons Section */}
          <h3 className="font-bold">My Task</h3>
          <button className="flex items-center gap-2 px-4 py-2 border-1 border-[#008000] rounded-lg text-[#008000] font-semibold hover:bg-green-50 transition">
            <CalendarDays className="w-5 h-5" />
            Apply Leave
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border-1 border-[#008000] rounded-lg text-[#008000] font-semibold hover:bg-blue-50 transition">
            <FileText className="w-5 h-5" />
            Apply Regularization
          </button>
        </div>
        <Card
          onClick={() => navigate("/adminDashboard/requestTable")}
          className="cursor-pointer hover:shadow-2xl transition-all duration-300 rounded-2xl"
          sx={{ bgcolor: "#f9fafb" }}
        >
          <CardContent>
            <Box className="flex items-center gap-4">
              <Box className="p-3 bg-blue-100 rounded-xl">
                <Inbox className="text-green-600 w-5 h-5" />
              </Box>
              <Box>
                <Box className="flex items-center gap-2" >
                  <Typography variant="body1" className="font-bold">
                    Admin's Pending Requests
                  </Typography>
                  {/* 👇 Number Badge */}
                  <Box className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    6
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  View all requests from Admin
                </Typography>
              </Box>
            </Box>
            <Box
              className="max-h-40 overflow-y-auto pr-2"
            >
              {users.map((user, index) => (
                <Box
                  key={index}
                  className="flex items-center gap-3 mb-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <Typography variant="body2" className="font-medium">
                    {user.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

      </div>
    </>
  );
};

export default Dashboard;
