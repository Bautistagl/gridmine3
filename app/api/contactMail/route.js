import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: 'bautistagonzalezlazo@gmail.com',
        pass: 'qpvf nnmz yjds fvck',
      },
    });

    const mailOption = {
      from: 'bautistagonzalezlazo@gmail.com',
      to: 'foltita26@gmail.com',
      subject: 'Consulta Grid Mine',
      html: `
        <h2>Consulta de ${name} </h2>
        <h4> Email: ${email}</h4>
        <h4> Consulta: ${message}</h4> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: 'Email Sent Successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 }
    );
  }
}
