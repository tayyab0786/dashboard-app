import Image from "next/image";
import styles from "./datasummary.module.css";

const DataSummary = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Image</td>
            <td>Farm Name</td>
            <td>Farm Address</td>
            <td>Farmer Name</td>
            <td>Added At</td>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
              </div>
            </td>
            <td>Haji Javed Jamil Dairy Farm</td>
            <td>Bin Qasim Town</td>
            <td>Khalid Qureshi</td>
            <td>2023-08-31</td>
            <button className={styles.button}>Manage</button>
            
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
              </div>
            </td>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
              </div>
            </td>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
              </div>
            </td>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default DataSummary;