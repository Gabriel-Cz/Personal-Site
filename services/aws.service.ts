import { DocumentClient, GetItemOutput } from 'aws-sdk/clients/dynamodb';
import { AWSError, SES } from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';
import SendEmailDto from './dtos/send-email.dto';
import { SendEmailRequest } from 'aws-sdk/clients/ses';

export default class AWSService {
  public pageName = 'Portfolio';
  db: DocumentClient;
  ses: SES;

  constructor (db: DocumentClient, ses: SES) {
    this.db = db;
    this.ses = ses;
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

  async sendEmail({ emailFrom, content, subject }: SendEmailDto) {
    let params: SendEmailRequest = {
      Source: emailFrom,
      Destination: {
        ToAddresses: [
          process.env.REACT_GMAIL_RECEIVER!
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: content,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        }
      },
    };
    return this.ses.sendEmail(params).promise();
  }
}