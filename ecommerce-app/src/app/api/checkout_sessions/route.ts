import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    interface Item {
      name: string;
      price: number;
      quantity: number;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.items.map((item: Item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // price in cents
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Stripe error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
