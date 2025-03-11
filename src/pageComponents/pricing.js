import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { MonetizationOn, TrendingUp, VerifiedUser } from "@mui/icons-material";

const pricingPlans = [
  {
    name: "3-Month Plan",
    price: 12999,
    features: [
      "Daily 2-3 Positions",
      "₹7K-₹10K Daily Profit",
      "Accuracy: 95%",
      "Proper SL & Targets",
      "Entry & Exit Levels",
      "Extra 2 Months Free",
    ],
    icon: <MonetizationOn fontSize="large" color="primary" />,
    color: "#1976D2",
  },
  {
    name: "6-Month Plan",
    price: 24999,
    features: [
      "Daily 2-3 Positions",
      "₹7K-₹10K Daily Profit",
      "Accuracy: 95%",
      "Proper SL & Targets",
      "Entry & Exit Levels",
      "Extra 3 Months Free",
    ],
    icon: <TrendingUp fontSize="large" color="secondary" />,
    color: "#E91E63",
  },
  {
    name: "Premium Lifetime",
    price: "Contact Us",
    features: [
      "All Features of 6-Month Plan",
      "Lifetime Access",
      "Exclusive Market Reports",
      "1-on-1 Mentorship",
    ],
    icon: <VerifiedUser fontSize="large" color="success" />,
    color: "#4CAF50",
  },
];

const PricingPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleOpen = (planName) => {
    setSelectedPlan(planName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <Typography variant="h4" className="text-center text-yellow-400 mb-6">
        💰 Our Premium Trading Plans
      </Typography>
<br/>
      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: plan.color, color: "white", padding: 2, textAlign: "center" }}>
              <CardContent>
                {plan.icon}
                <Typography variant="h5" className="mt-2">{plan.name}</Typography>
                <Typography variant="h6" className="mt-1">
                  {plan.price === "Contact Us" ? plan.price : `₹${plan.price}`}
                </Typography>
                <ul className="mt-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  sx={{ marginTop: 2 }} 
                  onClick={() => handleOpen(plan.name)}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact for {selectedPlan}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">📞 Contact Mahaveer at:</Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold", mt: 1 }}>
            7981235137
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <br/>
    </div>
  );
};

export default PricingPage;
