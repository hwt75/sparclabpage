import dotenv from "dotenv";
dotenv.config();
interface IConfiguration {
  NODE_ENV: string;
  APP_HOST: string;
  APP_PORT: number;
}
export const config: IConfiguration = {
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_HOST: process.env.APP_HOST || "127.0.0.1",
  APP_PORT: Number(process.env.APP_PORT) || 3000,
};
