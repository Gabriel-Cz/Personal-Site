import type { NextApiRequest, NextApiResponse } from 'next'
import { db, ses } from '@utils/aws.config';
import AWSService from '@services/aws.service';
import { ApiResponse } from 'types';

const awsService = new AWSService(db, ses);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === 'GET') {
    try {
      const pageName = req.query.pageName as string;
      if (!pageName) {
        res.status(500).send({
          error: { message: 'No page name in query' }
        });
        return;
      }
      const page = await awsService.getPage(pageName);
      res.status(200).send({ data: page });
    } catch (error: any) {
      res.status(500).send({
        error: { message: error.message }
      });
    }
  }
  if (req.method === 'POST') {
    try {
      const emailSent = await awsService.sendEmail(req.body);
      res.status(200).send({ data: emailSent });
    } catch (error: any) {
      console.log(error);
      res.status(500).send({
        error: { message: error.message }
      });
    }
  }
}