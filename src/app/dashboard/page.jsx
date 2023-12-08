import React from 'react'
import styles from "../ui/dashboard/dashboard.module.css"


import Card1 from '../ui/dashboard/cards/card1'
import Card2 from '../ui/dashboard/cards/card2'
import Card3 from '../ui/dashboard/cards/card3'
import DataSummary from '../ui/dashboard/datasummary/datasummary'



const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
    <div className={styles.cards}>
    <Card1/>
    <Card2/>
    <Card3/>
    </div>
    <DataSummary/>
    </div>
    </div>
  )
}

export default Dashboard