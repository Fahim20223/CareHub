"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const services = await dbConnect(collections.SERVICES).find().toArray();
  return services;
};

export const getSingleProduct = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };

  const service = await dbConnect(collections.SERVICES).findOne(query);

  return { ...service, _id: service._id.toString() } || {};
};
