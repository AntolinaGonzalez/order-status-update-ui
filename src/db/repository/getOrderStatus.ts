import { OrderStatus } from "@antoproject/dto/order-status";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../db";

export const dynamic = 'force-dynamic';
export const getOrderStatus = async() => {
    const command = new ScanCommand({
        TableName: process.env.DYNAMO_ORDER_TABLE,
    })
   try {
         const response = await docClient.send(command)
         const item = response.Items
         if (item === undefined) {
         return [] as Array<OrderStatus>
         } else {
         return Object.values(item) as Array<OrderStatus>
         }
      } catch (error) {
         throw error
      }
}