import { db } from '@utils/aws.config';
import AWSService from '@services/aws.service';
import type { ApiResponse } from 'types';
import type { NextApiRequest, NextApiResponse } from 'next'

const awsService = new AWSService(db);

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
}