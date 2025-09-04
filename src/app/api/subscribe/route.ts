// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName = null, phoneNumber = null, email, type } = body;

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    if (!["wait-list", "newsletter"].includes(type)) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const payload = {
      full_name: fullName,
      phone_number: phoneNumber,
      email,
      type,
    };

    const { data, error } = await supabaseAdmin
      .from("subscriptions")
      .insert([payload])
      .select()
      .limit(1);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, subscription: data?.[0] },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
