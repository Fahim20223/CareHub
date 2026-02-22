"use client";
import React, { useMemo, useState } from "react";
import BookedItems from "../Cards/BookedItems";

const Bookings = ({ bookedItems = [] }) => {
  const [items, setItems] = useState(bookedItems);

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id != id));
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: q } : item,
      ),
    );
  };

  return (
    <div>
      {items.length > 0 ? (
        <div className=" space-y-4">
          {items.map((item) => (
            <BookedItems
              key={item._id}
              item={item}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
              totalPrice={totalPrice}
              viewType="card"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-base-100 dark:bg-gray-800 rounded-xl dark:shadow-md text-center">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-2xl font-semibold mb-2">No Bookings Found</h3>
          <p className="opacity-60 mb-8">
            You haven’t booked any services yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Bookings;
