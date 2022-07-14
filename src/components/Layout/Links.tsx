import Link from "next/link";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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

  if (hiddenRouter) return null;

  return onMobile ? (
    <ListItem disablePadding>
      <Link href={`/${path}`}>
        <ListItemButton sx={{ textAlign: "center" }} LinkComponent="a" onClick={() => onMobile()}>
          <ListItemText primary={label} />
        </ListItemButton>
      </Link>
    </ListItem>
  ) : (
    <Link href={`/${path}`}>
      <Button LinkComponent="a" color="inherit">
        {label}
      </Button>
    </Link>
  );
};

export default Links;
