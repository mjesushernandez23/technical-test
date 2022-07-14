import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  show: boolean;
}

const Loading = (props: Props) => {
  const { show } = props;

  return (
    <Backdrop open={show} className="z-drawer">
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
