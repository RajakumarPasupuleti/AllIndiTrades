import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { 
  MonetizationOn, TrendingUp, AccountBalance, Work, Assessment, AttachMoney, 
  ShowChart, Security, BarChart, Verified, BusinessCenter, Timeline,
  AccountBalanceWallet as AccountBalanceWalletIcon, Insights as InsightsIcon, 
  SyncAlt as SyncAltIcon, StackedLineChart as StackedLineChartIcon, 
  Category as CategoryIcon, Description as DescriptionIcon
} from "@mui/icons-material";

const iconStyles = { fontSize: "2rem" };

const serviceData = [
  { 
    title: "Cash Trading", 
    description: "Trade stocks in the cash segment for short-term and long-term investments.", 
    icon: <MonetizationOn sx={{ color: "#ffeb3b", ...iconStyles }} /> 
  },
  { 
    title: "Stock Options Trading", 
    description: "Trade stock options with call and put strategies for risk management and hedging.", 
    icon: <CategoryIcon sx={{ color: "#ff4081", ...iconStyles }} /> 
  },
  { 
    title: "Futures & Options Trading", 
    description: "Trade derivative instruments like futures and options for strategic positioning.", 
    icon: <TrendingUp sx={{ color: "#ff9800", ...iconStyles }} /> 
  },
  { 
    title: "Bank Nifty", 
    description: "Trade in top banking sector stocks with high volatility and profit potential.", 
    icon: <AccountBalance sx={{ color: "#2196f3", ...iconStyles }} /> 
  },
  { 
    title: "Nifty 50", 
    description: "Invest in India's top 50 stocks with a diversified index strategy.", 
    icon: <Work sx={{ color: "#e91e63", ...iconStyles }} /> 
  },
  { 
    title: "Fin Nifty", 
    description: "Financial sector index trading for better diversification and risk control.", 
    icon: <Assessment sx={{ color: "#673ab7", ...iconStyles }} /> 
  },
  { 
    title: "Mid Cap Nifty", 
    description: "Trade mid-cap companies with high growth potential in the stock market.", 
    icon: <AttachMoney sx={{ color: "#4caf50", ...iconStyles }} /> 
  },
  { 
    title: "Bankex", 
    description: "A sectoral index focused on the banking sector stocks of India.", 
    icon: <ShowChart sx={{ color: "#ff5722", ...iconStyles }} /> 
  },
  
  { 
    title: "SWING TRADERS EQUITY", 
    description: "Short-term stock trading strategies for capturing price swings.", 
    icon: <TrendingUp sx={{ color: "#ff9800", ...iconStyles }} /> 
  },
  { 
    title: "EQUITY PLUS", 
    description: "Advanced stock trading strategies for maximized returns.", 
    icon: <InsightsIcon sx={{ color: "#2196f3", ...iconStyles }} /> 
  },
  
  { 
    title: "F&O PLUS", 
    description: "Premium Futures & Options trading strategies for high returns.", 
    icon: <Timeline sx={{ color: "#4caf50", ...iconStyles }} /> 
  },
  { 
    title: "ADVANCED TRADERS F&O", 
    description: "High-level F&O trading strategies for experienced traders.", 
    icon: <StackedLineChartIcon sx={{ color: "#e91e63", ...iconStyles }} /> 
  },
  { 
    title: "COMMODITIES TRADERS PACK", 
    description: "Trade commodities like gold, silver, crude oil, and metals.", 
    icon: <BarChart sx={{ color: "#9c27b0", ...iconStyles }} /> 
  },
];

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setServices(serviceData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <Typography variant="h4" className="text-center text-yellow-400 mb-6">
        🏆 Our Services
      </Typography>

      {loading ? (
        <div className="flex justify-center">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#222", color: "white", padding: 2 }}>
                <CardContent className="flex flex-col items-center text-center">
                  {service.icon}
                  <Typography variant="h6" className="mt-2">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <br/><br/>
    </div>
  );
};

export default ServicesPage;
