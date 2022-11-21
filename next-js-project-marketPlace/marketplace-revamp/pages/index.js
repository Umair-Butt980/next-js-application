import {
  GetRepairdeskCookie,
  generateNewCookie,
} from "../store/Slices/cookieSlice";

import { getVendors, getVendorsApi } from "../store/Slices/vendorSlice";
//Local Imports
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import VendorCards from "../components/VendorCard";
import { AppDispatch } from "../store/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const rdCookie = useSelector((state) => state.cookie);

  GetCookie(async () => {
    document.getElementById("body");
  });

  useEffect(() => {
    console.log(rdCookie, "Outside the is statement");
    if (rdCookie.rdCookie != undefined && rdCookie.rdCookie != null) {
      dispatch(getVendorsApi());
    } else {
      console.log("<<=======NOT FOUND THE COOKIE=======>>");
      window.location.href = "URL";
    }
  }, [rdCookie]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="mp-header">
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <div className="mp-footer flex grow flex-col justify-end">
        <Footer />
      </div>
    </div>
  );
}
