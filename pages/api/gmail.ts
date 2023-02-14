import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from 'types';
import GMAILService from '@services/gmail.service';

const gmailService = new GMAILService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const query = req.query;

  if (req.method === 'POST' && query.type === 'send') {
    try {
      const emailSent = await gmailService.sendMail(req);
      res.status(200).send({ data: emailSent });
    } catch (error: any) {
      res.status(500).send({
        error: { message: error.message }
      });
    }
  }
}