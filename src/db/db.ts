import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

export const dbClient = new DynamoDBClient({});
export const docClient = DynamoDBDocumentClient.from(dbClient);

