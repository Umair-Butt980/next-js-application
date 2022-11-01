import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function Home() {
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
