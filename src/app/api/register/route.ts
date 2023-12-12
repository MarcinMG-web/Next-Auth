import connectDB from '@/db/configDB';
import UserModel from '@/db/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  // DB
  await connectDB();

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return new NextResponse('Email is already in use', { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new UserModel({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('User is registered', { status: 200 });
  } catch (error) {
    return new NextResponse('Internal server error', {
      status: 500,
    });
  }
};
