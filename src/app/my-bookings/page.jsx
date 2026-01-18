import { getBooked } from "@/actions/server/booked";
import React from "react";

const MyBookingPage = async () => {
  const bookedItems = await getBooked();

  return <div>{bookedItems.length}</div>;
};

export default MyBookingPage;
