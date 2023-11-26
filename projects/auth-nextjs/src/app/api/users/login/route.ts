import { connect } from "@/db/config";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { email, password } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({email});

    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist.' },
        { status: 404 }
      )
    }

    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Validate email address to continue.' },
        { status: 400 }
      )
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { error: 'Email or password is invalid.' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt
      },
      { status: 200 }
    )

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}