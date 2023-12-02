'use client'
import { getOrderStatus } from '@antoproject/db/repository/getOrderStatus';
import Header from './components/header';
import { OrderStatusTable } from './components/table';
import styles from './page.module.css'

interface OrderStatus {
  id: string
  order_id: string
  order_status: string
  description: string
}

export default async function Home() {  
 
  return (
    <main className={styles.main}>
      <Header/>
        <OrderStatusTable/>
    </main>
  )
}


