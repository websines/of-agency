import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request){
    try{
    const {input} = await request.json()

    const response = await fetch(`https://api.apify.com/v2/actor-tasks/${process.env.APIFY_ACTOR}/run-sync-get-dataset-items?token=${process.env.APIFY_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    const responseData = await response.json();

    return NextResponse.json({ "user_data": responseData });
  } catch (error) {
    return NextResponse.json({ "error": error});
  }

}