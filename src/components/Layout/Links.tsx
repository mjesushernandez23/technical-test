import Link from "next/link";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";

interface LinksProps {
  path: string;
  label: string;
  onMobile?: () => void;
  authStatus: boolean;
  protect?: boolean;
}

const Links = (props: LinksProps) => {
  const { onMobile, authStatus, path, label, protect = false } = props;
  const hiddenRouter = !protect ? authStatus : !authStatus;
  const { asPath } = useRouter();
  if (hiddenRouter) return null;
  const isActiveRoute = path === asPath ? "underline" : "";

  return onMobile ? (
    <ListItem disablePadding>
      <Link href={path}>
        <ListItemButton sx={{ textAlign: "center" }} LinkComponent="a" onClick={() => onMobile()}>
          <ListItemText className={isActiveRoute} primary={label} />
        </ListItemButton>
      </Link>
    </ListItem>
  ) : (
    <Link href={path}>
      <Button LinkComponent="a" color="inherit">
        <span className={isActiveRoute}>{label}</span>
      </Button>
    </Link>
  );
};

export default Links;
