import React from 'react'
import styles from "./sidebar.module.css"
import { icons } from 'react-icons';
import {MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork} from 'react-icons/md'
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      }
     
     
    ],
  },
  
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.usertitle}>Administator</span>
        </div>

      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
           {cat.list.map(item=>(
            <MenuLink item={item} key ={item.title}/>
           ))}
          </li>
        ))}
        </ul>
        <button className={styles.logout}>
          <MdLogout/>Log out</button>
        </div>
  );
};
export default Sidebar