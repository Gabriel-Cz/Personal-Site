import { AWSError } from "aws-sdk";
import { GetItemOutput } from "aws-sdk/clients/dynamodb";
import { PromiseResult } from "aws-sdk/lib/request";

class APIService {
  constructor() { }
  private url: string = process.env.REACT_URL || '';

  async getPage(pageName: string): Promise<
    PromiseResult<GetItemOutput, AWSError>
  > {
    const res = await fetch(`${this.url}/api/aws?pageName=${pageName}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
      },
    });
    const { data } = await res.json();
    return data;
  }
}

const api = new APIService();
export default api;