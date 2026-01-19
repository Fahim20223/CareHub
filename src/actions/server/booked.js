"use server";

import { authOptions } from "@/lib/authOption";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const { dbConnect, collections } = require("@/lib/dbConnect");

const bookedCollection = dbConnect(collections.BOOKED);

export const handleBooked = async ({ service, inc = true }) => {
  const { user } = (await getServerSession(authOptions)) || {};
  //   console.log(user);
  if (!user) return { success: false };

  //getBookedItem->user.email && productId
  const query = { email: user?.email, serviceId: service?._id };

  const isAdded = await bookedCollection.findOne(query);

  if (isAdded) {
    //if Exist :update booked list

    const updatedData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };
    const result = await bookedCollection.updateOne(query, updatedData);
    return { success: Boolean(result.modifiedCount) };
  } else {
    //Not Exist : insert booked list
    const newData = {
      serviceId: service?._id,
      email: user?.email,
      name: service.name,
      quantity: 1,
      image: service.image,
      pricePerHour: service.pricePerHour,
      username: user?.name,
    };

    const result = await bookedCollection.insertOne(newData);
    return { success: result.acknowledged };
  }

  //   return { success: true };
};
export const getBooked = cache(async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  //   console.log(user);
  if (!user) return [];

  const query = { email: user?.email };

  const result = await bookedCollection.find(query).toArray();

  return result;
});

export const deleteItemsFromBookedList = async (id) => {
  const { user } = (await getServerSession(authOptions)) || {};
  //   console.log(user);
  if (!user) return { success: false };

  if (id?.length != 24) {
    return { success: false };
  }
  const query = { _id: new ObjectId(id) };

  const result = await bookedCollection.deleteOne(query);

  if (Boolean(result.deletedCount)) {
    revalidatePath("/my-bookings");
  }

  return { success: Boolean(result.deletedCount) };
};
