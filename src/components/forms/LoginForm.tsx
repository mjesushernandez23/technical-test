import MyInput from "@components/ui/MyInput";
import Button from "@mui/material/Button";
import { validationLogin } from "@utils/validationsForms";
import { useFormik } from "formik";
import SendIcon from "@mui/icons-material/Send";
import { useAppDispatch } from "@hooks/useRedux";
import { isAuthAsync } from "@store/slices/uiSlice";

interface LoginFormProps {}
const LoginForm = (props: LoginFormProps) => {
  const dispatch = useAppDispatch();

  const { values, errors, handleSubmit, handleChange, handleBlur, resetForm } = useFormik({
    ...validationLogin,
    onSubmit: values => {
      dispatch(isAuthAsync(values));
    },
  });

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
      <MyInput
        name="email"
        type="email"
        label="Correo electrónico*"
        placeholder="user@example.com"
        value={values.email}
        error={errors.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <MyInput
        name="password"
        type="password"
        label="Contraseña*"
        placeholder="******"
        value={values.password}
        error={errors.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <div className="col-span-2">
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
