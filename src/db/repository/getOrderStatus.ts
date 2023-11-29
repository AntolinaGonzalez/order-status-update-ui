import { OrderStatus } from "@antoproject/dto/order-status";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../db";

export const getOrderStatus = async() => {
    const command = new GetCommand({
        TableName: 'order-status',
        Key: {}
    })
    
 try {
      const response = await docClient.send(command);
      console.log(response)
      const item = response.Item
      if (item === undefined) {
        return [] as Array<OrderStatus>
      } else {
        return Object.values(item.orders) as Array<OrderStatus>
      }
   } catch (error) {
      throw error
   }
  
}