import { string, object } from "yup";

export const validationLogin = {
  validationSchema: object({
    email: string()
      .email("Ingresa un correo electrónico valido")
      .required("El correo electrónico es obligatorio"),
    password: string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es obligatoria"),
  }),

  initialValues: {
    email: "",
    password: "",
  },
};
