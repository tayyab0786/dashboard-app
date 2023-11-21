import React from 'react'
import styles from ".//cards.module.css"
import { MdSupervisedUserCircle } from 'react-icons/md'

const Cards = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.text}>
        <span className={styles.title}>Humans Report</span>
        <span className={styles.number}>5868</span>
        <span className={styles.details}>
          <span className={styles.positive}>12%</span> Data collect more then previous month
        </span>
      </div>
    </div>
  )
}

export default Cards