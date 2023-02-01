import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types';
import GMAILService from '@services/gmail.service';

const gmailService = new GMAILService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === 'POST') {
    try {
      const emailSent = await gmailService.sendMail(req, res);
      res.status(200).send({ data: emailSent });
    } catch (error: any) {
      res.status(500).send({
        error: { message: error.message }
      });
    }
  }
}