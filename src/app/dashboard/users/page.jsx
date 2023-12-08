import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

const UsersPage
  = () => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
        <Search placeholder="Search for a user..." /> 
        <Link href={'/dashboard/users/add'}>
          <button className={styles.addButton}>ADD</button>
          </Link>
      </div>
      <table className={styles.table}>
      <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
              <td>
                <div className={styles.user}>
                  <Image 
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}/>
                  John Doe
                </div>
              </td>
              <td>john@mail.com</td>
              <td>07.12.2023</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>

             
              </tbody>
      </table>
      <Pagination/>
      </div>
    )
  }

export default UsersPage
