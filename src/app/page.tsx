'use client'
import { getOrderStatus } from '@antoproject/db/repository/getOrderStatus';
import Header from './components/header';
import { OrderStatusTable } from './components/table';
import styles from './page.module.css'

export const revalidate = 0;

export default async function Home() {  
 
  return (
    <main className={styles.main}>
      <Header/>
        <OrderStatusTable/>
    </main>
  )
}


