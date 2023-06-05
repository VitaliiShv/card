import styles from './Card.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import user from '../../images/user.png';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../shared/api';

const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getAllUsers();
        setUsers(allUsers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [getAllUsers]);

  const cards = users.map(({ id, tweets, avatar, followers }) => (
    <li key={id}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <div className={styles.userWrapper}>
          <div className={styles.line}></div>
          <div className={styles.userOuter}>
            <div className={styles.userInner}>
              <img className={styles.userPhoto} src={user} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.options}>
          <p className={styles.text + ' ' + styles.tweets}>{tweets} tweets</p>
          <p className={styles.text + ' ' + styles.followers}>{followers} Followers</p>
          <button className={styles.button}>Follow</button>
        </div>
      </div>
    </li>
  ));

  return <ul className={styles.listWrapper}>{cards}</ul>;
};

export default Card;
