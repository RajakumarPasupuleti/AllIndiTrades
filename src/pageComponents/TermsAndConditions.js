import React from "react";
import { Container, Typography, Box } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 3,
          color: "#1d2d5a", // Dark blue shade
        }}
      >
        TERMS & CONDITIONS
      </Typography>

      {/* Section - Terms */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1d2d5a" }}>
          TERMS
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8 }}>
          By accessing this website, you agree to be bound by these website Terms and Conditions of
          Use, all applicable laws and regulations, and agree that you are responsible for
          compliance with any applicable local laws. If you do not agree with any of these terms,
          you are prohibited from using or accessing this site. The materials contained in this
          website are protected by applicable copyright and trademark law.
        </Typography>
      </Box>

      {/* Section - Use License */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1d2d5a" }}>
          USE LICENSE
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8 }}>
          a. Permission is granted to temporarily download one copy of the materials (information)
          on All India Traders’s website for personal, non-commercial transitory viewing only. This is the
          grant of a license, not a transfer of title, and under this license you may not:
        </Typography>
        <ul style={{ color: "#444", lineHeight: 1.8, marginTop: "8px", paddingLeft: "20px" }}>
          <li>Modify or copy the materials.</li>
          <li>Use the materials for any commercial purpose or public display.</li>
          <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
          <li>Remove any copyright or other proprietary notations from the materials.</li>
          <li>Transfer the materials to another person or “mirror” the materials on any other server.</li>
        </ul>
      </Box>

      {/* Section - Disclaimer */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1d2d5a" }}>
          DISCLAIMER
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8 }}>
          The materials on All India Traders’s website are provided “as is”. All India Traders makes no warranties,
          expressed or implied, and hereby disclaims all other warranties including, without
          limitation, implied warranties of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of rights.
        </Typography>
      </Box>

      {/* Section - Limitations */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1d2d5a" }}>
          LIMITATIONS
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8 }}>
          In no event shall All India Traders or its suppliers be liable for any damages (including,
          without limitation, damages for loss of profit, data, or business interruption) arising
          out of the use or inability to use the materials on the website.
        </Typography>
      </Box>

      {/* Section - Governing Law */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1d2d5a" }}>
          GOVERNING LAW
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8 }}>
          Any claim relating to All India Traders’s website shall be governed by the laws of India without
          regard to its conflict of law provisions.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
