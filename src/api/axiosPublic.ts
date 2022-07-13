import axios, { AxiosRequestConfig } from "axios";
const API = process.env.apiAws;

interface axiosPublicProps extends Omit<AxiosRequestConfig, "url" | "baseURL"> {
  endPoint: string;
}
export default async function axiosPublic(props: axiosPublicProps): Promise<{} | [] | null> {
  const { endPoint, method } = props;
  const url = `${API}${endPoint}`;
  try {
    const { data } = await axios({ url, method });
    return data;
  } catch (err) {
    return null;
  }
}
