import { LoginProps } from "interfaces/apiProps";

const loginFakeValues: LoginProps = {
  email: `${process.env.USER_EMAIL}`,
  password: `${process.env.USER_PASSWORD}`,
};
Object.freeze(loginFakeValues);

const evaluation = (payload: LoginProps): Promise<boolean> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const { email, password } = loginFakeValues;
      const evaluation = email === payload.email && password === payload.password;
      evaluation ? resolve(true) : reject("credenciales invalidas");
    }, 3000)
  );

export default async function loginApi(values: LoginProps): Promise<boolean> {
  try {
    const result = await evaluation(values);
    return result;
  } catch (err) {
    console.error(err);
    return false;
  }
}
