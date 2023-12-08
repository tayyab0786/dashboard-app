import React from 'react'
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image
 from 'next/image';
const SingleUserpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="noavatar" fill/>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <label>Username</label>
        <input type="text" name="username" placeholder="John Doe"/>
        <label>Email</label>
        <input type="text" name="email" placeholder="johndoe@123.com"/>
        <label>Password</label>
        <input type="text" name="password" placeholder="********"/>
        <label>Phone</label>
        <input type="text" name="phone" placeholder="0123-456789"/>
        <label>Address</label>
        <input type="text" name="address" placeholder="Pakistan"/>
       
        <label>Is Admin</label>
        <select name="isAdmin" id="isAdmin">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
        </select>
          
        <label>Is Active</label>
        <select name="isActive" id="isActive">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
        </select>
        </form>

      </div>
        </div>
  )
}

export default SingleUserpage