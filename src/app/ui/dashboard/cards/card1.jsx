import React from 'react'
import styles from ".//cards.module.css"


const Card1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span className={styles.number}>0</span>
        <span className={styles.title}>Total Farmers</span>
      
      </div>
    </div>
  )
}

export default Card1