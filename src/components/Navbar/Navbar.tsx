import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ backgroundColor: "transparent", color: "black" }}
    >
      <Toolbar>
        <Typography variant="h6">Visit Malin Head</Typography>
        {/* Add other navbar contents here */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
