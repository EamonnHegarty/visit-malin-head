import { Box, Typography } from "@mui/material";
import MalinHead from "../../assets/malin-head-1.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${MalinHead})`,
        height: "100vh", // or any desired height
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center", // Vertically align content to center
        justifyContent: "center", // Horizontally align content to center
      }}
    >
      {/* Content of your hero section, for instance: */}
      <Typography variant="h2" color="common.white">
        Welcome to Our Site
      </Typography>
    </Box>
  );
};

export default Hero;
