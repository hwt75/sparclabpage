import axios from "axios";

const host = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH}` || "failed";
const secret = process.env.REACT_APP_SECRET_KEY || "failed";
const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };
  
  const createKey = (key) => {
    return generateRandomString(20) + "-" + key + "-" + generateRandomString(20);
  };
  
export const axiosRequest = (path, data) => {
  const url = `${host}${path}`;
  return axios.post(url, { ...data, code: createKey(secret) });
};


export const convertArrayToObject = (dataArray) => {
  return dataArray.reduce((acc, field) => {
    const fieldName = Object.keys(field)[0];
    acc[fieldName] = field[fieldName];
    return acc;
  }, {});
};