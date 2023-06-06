import styles from './Card.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { useState, useEffect } from 'react';

const Card = ({ cardData, subscribedCard }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [followers, setFollowers] = useState(cardData.followers);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('addedIds')).includes(cardData.id.toString())) {
      setIsSubscribed(true);
      setFollowers(cardData.followers + 1);
    }
  }, []);

  const subscribe = id => {
    isSubscribed ? setIsSubscribed(false) : setIsSubscribed(true);
    setFollowers(prevFollowers => (!isSubscribed ? prevFollowers + 1 : prevFollowers - 1));
    subscribedCard(id);
  };

  function formatNumber(number) {
    const numberParts = number.toString().split('.');
    numberParts[0] = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberParts.join('.');
  }

  return (
    <li>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <div className={styles.userWrapper}>
          <div className={styles.line}></div>
          <div className={styles.userOuter}>
            <div className={styles.userInner}>
              <img className={styles.userPhoto} src={cardData.avatar} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.options}>
          <p className={styles.text + ' ' + styles.tweets}>
            {formatNumber(cardData.tweets)} tweets
          </p>
          <p className={styles.text + ' ' + styles.followers}>{followers} Followers</p>
          <button
            onClick={() => {
              subscribe(cardData.id);
            }}
            className={!isSubscribed ? styles.button : styles.button + ' ' + styles.subscribed}
          >
            {!isSubscribed ? 'Follow' : 'Following'}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
