import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science"; // Research Icon
import ShowChartIcon from "@mui/icons-material/ShowChart"; // Profits Icon
import SupportAgentIcon from "@mui/icons-material/SupportAgent"; // Support Icon
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Swing Traders Icon
import InsightsIcon from "@mui/icons-material/Insights"; // Equity Plus Icon
import TimelineIcon from "@mui/icons-material/Timeline"; // F&O Plus Icon
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart"; // Advanced Traders Icon
import BarChartIcon from "@mui/icons-material/BarChart"; // Commodities Traders Pack Icon
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"; // Cash Icon
import SyncAltIcon from "@mui/icons-material/SyncAlt"; // Futures and Options Icon

const iconStyles = {
  fontSize: "3rem",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
};

const services = [
  { title: "CASH", icon: <AccountBalanceWalletIcon sx={{ color: "#ffeb3b", ...iconStyles }} /> },
  { title: "SWING TRADERS EQUITY", icon: <TrendingUpIcon sx={{ color: "#ff9800", ...iconStyles }} /> },
  { title: "EQUITY PLUS", icon: <InsightsIcon sx={{ color: "#2196f3", ...iconStyles }} /> },
  { title: "FUTURES AND OPTIONS", icon: <SyncAltIcon sx={{ color: "#673ab7", ...iconStyles }} /> },
  { title: "F&O PLUS", icon: <TimelineIcon sx={{ color: "#4caf50", ...iconStyles }} /> },
  { title: "ADVANCED TRADERS F&O", icon: <StackedLineChartIcon sx={{ color: "#e91e63", ...iconStyles }} /> },
  { title: "COMMODITIES TRADERS PACK", icon: <BarChartIcon sx={{ color: "#9c27b0", ...iconStyles }} /> },
];

const StockMarketDashboard = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "40px" }}>
      {/* What We Do Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
        What We Do
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <ScienceIcon sx={{ color: "#673ab7", ...iconStyles }} />
          <Typography variant="h6" fontWeight="bold">Research</Typography>
          <Typography variant="body2">
            A CMT trained research team will send BUY/SELL recommendations on the basis of technical analysis.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ShowChartIcon sx={{ color: "#f44336", ...iconStyles }} />
          <Typography variant="h6" fontWeight="bold">Profits</Typography>
          <Typography variant="body2">
            With our trading strategies, and research backend tips, you will minimize risks and maximize returns.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SupportAgentIcon sx={{ color: "#ff5722", ...iconStyles }} />
          <Typography variant="h6" fontWeight="bold">Support</Typography>
          <Typography variant="body2">
            Call us on our helpline or write to us and get your queries resolved.
          </Typography>
        </Grid>
      </Grid>

      {/* Our Top Services Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: 6, marginBottom: 3 }}>
        Our Top Services
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                padding: 2,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 5,
                },
              }}
            >
              <CardContent>
                {service.icon}
                <Typography variant="body1" fontWeight="bold">
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StockMarketDashboard;
