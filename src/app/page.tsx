'use client'
import { getOrderStatus } from '@antoproject/db/repository/getOrderStatus';
import Header from './components/header';
import { OrderStatusTable } from './components/table';
import styles from './page.module.css'

export default async function Home() {  
 const items = await getOrderStatus();
  return (
    <main className={styles.main}>
      <Header/>
        <OrderStatusTable result={items}/>
    </main>
  )
}


