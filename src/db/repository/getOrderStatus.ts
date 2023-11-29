import { OrderStatus } from "@antoproject/dto/order-status";
import { GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../db";

export const getOrderStatus = async() => {
    const command = new ScanCommand({
        TableName: process.env.DYNAMO_TABLE,
    })
    
 try {
      const response = await docClient.send(command)
      console.log(response)
      const item = response.Items
      if (item === undefined) {
        return [] as Array<OrderStatus>
      } else {
        return Object.values(item) as Array<OrderStatus>
      }
   } catch (error) {
    console.log('hol')
      throw error
   }
  
}