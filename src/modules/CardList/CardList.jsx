import styles from './CardList.module.css';
import Card from '../Card/Card';

import { useEffect, useState } from 'react';
import { getAllUsers } from '../../shared/api';

const CardList = () => {
  const [users, setUsers] = useState([]);
  const [addedCards, setAddedCards] = useState(JSON.parse(localStorage.getItem('addedIds')) || []);
  const [itemsToShow, setItemsToShow] = useState(3);

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
  }, []);

  const addToArray = id => {
    setAddedCards(prevCards => {
      if (addedCards.includes(id)) {
        const index = prevCards.indexOf(id);
        const updatedCards = [...prevCards];
        updatedCards.splice(index, 1);
        return updatedCards;
      }

      return [id, ...prevCards];
    });
  };

  useEffect(() => {
    localStorage.setItem('addedIds', JSON.stringify(addedCards));
  }, [addedCards]);

  const loadMore = () => {
    setItemsToShow(prevItems => prevItems + 3);
  };

  const cards = users
    .slice(0, itemsToShow)
    .map(user => <Card key={user.id} cardData={user} subscribedCard={addToArray}></Card>);

  return (
    <>
      <ul className={styles.listWrapper}>{cards}</ul>
      <button onClick={loadMore} className={styles.button}>
        Load More
      </button>
    </>
  );
};

export default CardList;
