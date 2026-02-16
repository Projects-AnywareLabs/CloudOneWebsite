import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import About from "./components/About";
import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// // import Details from "./components/Details";
// import Blogs from "./components/Blogs";
// import Courses from "./components/Courses";
// import Academics from "./components/Academics";
// import UAVDrone from "./components/product-dropdown/UAVDrone";
// import HapsDrone from "./components/product-dropdown/HapsDrone";
import Onboarding from "./components/Onboarding";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/products" element={<Page heading="PRODUCTS" />}></Route> */}
        {/* <Route path="/pricing" element={<Page heading="PRICING" />}></Route> */}
        {/* <Route path="/resources" element={<Page heading="RESOURCES" />}></Route> */}

        {/* <Route path="/uav" element={<UAVDrone />}></Route>
        <Route path="/haps" element={<HapsDrone />}></Route> */}

        {/* <Route path="/details" element={<Details />}></Route> */}
        {/* <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/academics" element={<Academics/>}></Route> */}
      {/* </Routes> */}
      {/* <Footer /> */}
       <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </>
  );
}

export default App;
