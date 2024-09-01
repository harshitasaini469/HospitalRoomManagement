import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomInfoForm from "./RoomInfoForm";
import RoomBookingForm from "./RoomBookingForm";

const BookingScreen = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route index path="/" element={<RoomInfoForm />} />
          <Route path="/room-booking" element={<RoomBookingForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default BookingScreen;
