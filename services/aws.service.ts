import { DocumentClient, GetItemOutput } from 'aws-sdk/clients/dynamodb';
import { AWSError } from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';

export default class AWSService {
  public pageName = 'Portfolio';
  db: DocumentClient;

  constructor (db: DocumentClient,) {
    this.db = db;
  }
  
  async getPage(pageName: string): Promise<
    PromiseResult<GetItemOutput, AWSError>
  > {
    const params: DocumentClient.GetItemInput = {
      TableName: this.pageName,
      Key: {
        PageName: pageName,
      }
    }
    return this.db.get(params).promise();
  }
}