import { Box, Typography } from "@mui/material";
import MalinHead from "../../assets/near-banbas-2.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${MalinHead})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" color="common.white">
        Ireland's Most Northernly Point
      </Typography>
    </Box>
  );
};

export default Hero;
