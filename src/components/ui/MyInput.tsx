import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FormikHandlers } from "formik";

type ConflictProps = "label" | "placeholder" | "error" | "value" | "onChange" | "onBlur" | "name";

interface MyInputProps extends Omit<TextFieldProps, ConflictProps> {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
}
const MyInput = (props: MyInputProps) => {
  const { name, label, placeholder, value, error, handleChange, handleBlur, ...propsTextField } =
    props;

  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      error={Boolean(error)}
      helperText={error}
      onChange={handleChange}
      onBlur={handleBlur}
      {...propsTextField}
    />
  );
};

export default MyInput;
