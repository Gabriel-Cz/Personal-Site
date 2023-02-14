import { NextApiRequest } from "next";
import nodemailer from 'nodemailer';
export default class GMAILService {
  async sendMail(req: NextApiRequest) {
    const { emailFrom, subject, content } = JSON.parse(req.body);
    const mailOptions = {
      to: process.env.REACT_GMAIL_RECEIVER,
      subject: subject,
      headers: {
        'reply-to': emailFrom,
      },
      html: `
        <html>
          <body>
            <b><i>From: </i>${emailFrom}</b>
            <p>${content}</p>
          </body>
        </html>
      `,
    }
    console.log(emailFrom);
    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.REACT_GMAIL_SENDER,
        pass: process.env.REACT_GMAIL_SENDER_PASS
      }
    });
    return transport.sendMail(mailOptions);
  }
};