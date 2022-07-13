import Link from "next/link";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface LinksProps {
  path: string;
  label: string;
}
export const LinksDesktop = (props: LinksProps) => {
  const { path, label } = props;
  return (
    <Link href={`/${path}`}>
      <Button LinkComponent="a" color="inherit">{label}</Button>
    </Link>
  );
};

export const LinksMobile = (props: LinksProps) => {
  const { path, label } = props;

  return (
    <ListItem disablePadding>
      <Link href={`/${path}`}>
        <ListItemButton sx={{ textAlign: "center" }} LinkComponent="a">
          <ListItemText primary={label} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};
