import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";

export const CookieSlice = createSlice({
  name: "cookie",
  initialState: {
    rdCookie: null,
  },
  reducers: {
    saveCookie: (state, action) => {
      console.log(state, "this is from the store");
      state.rdCookie = action.payload;
    },
  },
});

export const GetRepairdeskCookie = async (cb: any) => {
  const dispatch = useDispatch();
  let myCookie = "";
  const cookies: any = await cookieParser();
  if (!cookies) {
    return;
  }
  Object.keys(cookies).forEach((cookieKey) => {
    if (cookieKey.match(/^ucf_y[a-zA-Z0-9]{32}/)) {
      myCookie = `${cookieKey}=${cookies[cookieKey]}`;
    }
  });
  dispatch(saveCookie(myCookie));
  cb();
};

export const cookieParser = async () => {
  if (document.cookie == "") {
    return false;
  }
  return document.cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc: any, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
};
export const generateNewCookie = async () => {
  try {
    var base_url = localStorage.getItem("Origin");
    // console.log(base_url, "<==========baseURL====>");
    let newCookie = "endpoint to generate new cookie";
    console.log(newCookie, "<===New Cookie===>");
  } catch (error) {
    console.log(error);
  }
};

export default CookieSlice.reducer;
const saveCookie = CookieSlice.actions.saveCookie;
export { saveCookie };
