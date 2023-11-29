import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export const dbClient = new DynamoDBClient({
    region: 'sa-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_SECRET_KEY as string
    },
});
export const docClient = DynamoDBDocumentClient.from(dbClient)

