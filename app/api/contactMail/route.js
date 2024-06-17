import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, name, message } = await request.json();

    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
      greeting = 'Buenos días';
    } else if (currentHour < 18) {
      greeting = 'Buenas tardes';
    } else {
      greeting = 'Buenas noches';
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: 'bautistagonzalezlazo@gmail.com',
        pass: 'qpvf nnmz yjds fvck',
      },
    });

    const mailOptionSupport = {
      from: 'support@gridmine.io',
      to: 'support@gridmine.io',
      subject: 'Consulta Grid Mine',
      html: `
        <h2>Consulta de ${name} </h2>
        <h4> Email: ${email}</h4>
        <h4> Consulta: ${message}</h4> 
        `,
    };

    const mailOptionConfirmation = {
      from: 'support@gridmine.io',
      to: email,
      subject: 'Confirmación de recepción de consulta',
      html: `
        <h2> ${greeting} ${name},</h2>
        <p>Recibimos tu consulta correctamente. Un responsable estara en contacto respondiendo todas sus dudas.</p>
        <p>Consulta enviada:</p>
        <h4>${message}</h4>
        <p>Gracias por contactarnos.</p>
        `,
    };

    // Enviar correo al soporte
    await transporter.sendMail(mailOptionSupport);
    // Enviar correo de confirmación al remitente
    await transporter.sendMail(mailOptionConfirmation);

    return NextResponse.json(
      { message: 'Emails Sent Successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { message: 'Failed to Send Emails' },
      { status: 500 }
    );
  }
}
