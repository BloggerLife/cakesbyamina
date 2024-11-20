import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { MenuItem } from "@/models/MenuItem";
import { Order } from "@/models/Order";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);

  const { cartProducts, address } = await req.json();
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  const orderDoc = await Order.create({
    userEmail,
    ...address,
    cartProducts,
    paid: false,
  });

  // Simulate processing payment and creating order details without Stripe
  // Here, we are assuming that the order is processed successfully without a payment gateway

  const orderId = orderDoc._id.toString();

  // Simulate a successful order creation
  const orderUrl = `${process.env.NEXTAUTH_URL}orders/${orderId}?clear-cart=1`;

  return Response.json(orderUrl);
}
