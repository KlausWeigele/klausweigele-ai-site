import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

  try {
    const response = await fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Backend error", response.status, errorBody);
      return NextResponse.json({ success: false, error: "Backend request failed." }, { status: 502 });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unable to reach backend", error);
    return NextResponse.json({ success: false, error: "Service unavailable." }, { status: 503 });
  }
}
