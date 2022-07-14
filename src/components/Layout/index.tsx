import { useState } from "react";
import { useAppSelector } from "@hooks/useRedux";
//components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { LinksDesktop, LinksMobile } from "./Links";
import Loading from "./Loading";

const navItems = [
  { path: "", label: "Home" },
  { path: "login", label: "Login" },
];

interface LayoutProps {
  children: JSX.Element;
  window?: () => Window;
}

const Layout = (props: LayoutProps) => {
  const { children, window } = props;
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const isLoading = useAppSelector(state => state.ui.isLoading);

  const handleShowSideBar = (): void => {
    setShowSideBar(prev => !prev);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleShowSideBar}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <LinksDesktop key={`links-desktop-${index}`} {...item} />
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={showSideBar}
            onClose={handleShowSideBar}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box" },
            }}
          >
            <List>
              {navItems.map((item, index) => (
                <LinksMobile key={`links-mobile-${index}`} {...item} />
              ))}
            </List>
          </Drawer>
          <Box component="main">
            <Toolbar />
            {children}
          </Box>
        </Box>
      </Box>
      <Loading show={isLoading} />
    </>
  );
};

export default Layout;
