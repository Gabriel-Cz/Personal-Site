import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.REACT_GMAIL_CLIENT_ID,
  process.env.REACT_GMAIL_CLIENT_SECRET,
  process.env.REACT_GMAIL_REDIRECT_URL
);

oAuth2Client.setCredentials({ refresh_token: process.env.REACT_GMAIL_REFRESH_TOKEN });

export default class GMAILService {
  async sendMail(req: NextApiRequest, _res:NextApiResponse) {
    const mailOptions = {
      to: process.env.REACT_GMAIL_RECEIVER,
      from: req.body.emailFrom,
      subject: req.body.subject,
      html: `
        <em>Sent from Personal Site.</em>
        <body>${req.body.content}</body>
      `
    }
    const auth = {
      type: "OAuth2",
      user: process.env.REACT_GMAIL_RECEIVER,
      clientId: process.env.REACT_GMAIL_CLIENT_ID,
      clientSecret: process.env.REACT_GMAIL_CLIENT_SECRET,
      refreshToken: process.env.REACT_GMAIL_REFRESH_TOKEN,
    };
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      // @ts-ignore
      service: "gmail",
      auth: {
        ...auth,
        accessToken: accessToken,
      },
    }); 
   const result = await transport.sendMail(mailOptions);
   return result;
  }
};