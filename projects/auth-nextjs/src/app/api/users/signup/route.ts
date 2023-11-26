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

    if (user) {
      return NextResponse.json(
        { error: 'User already exists.' },
        { status: 400 }
      )
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const savedUser = await newUser.save()
    console.log(savedUser)

    return NextResponse.json(
      {
        id: savedUser.id,
        email: savedUser.email,
        createdAt: savedUser.createdAt
      },
      { status: 201 }
    )

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}