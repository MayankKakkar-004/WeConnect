import Meetings from "./components/meetings2";
import Preview from "./preview";
import Splash from "./splash";
import Ending from "./ending";
import Landing from "./landing";
import Auth from "./auth";
import Meetings2 from "./components/meetings2";
import Mainmeet from "./components/mainmeet";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-full ">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/splash" element={<Splash />} /> */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/schedule" element={<Meetings2 />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/room" element={<Mainmeet />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </div>
  );
};

export default App;
