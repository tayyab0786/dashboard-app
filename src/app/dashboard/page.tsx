import React from 'react'
import styles from "../ui/dashboard/dashboard.module.css"
import Cards from '../ui/dashboard/cards/cards'
import Chart from '../ui/dashboard/chart/chart'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'


const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
    <div className={styles.cards}>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
    <Transactions/>
    <Chart/>
    </div>
    <div className={styles.side}>
      <Rightbar/>
    </div>
    </div>
  )
}

export default Dashboard