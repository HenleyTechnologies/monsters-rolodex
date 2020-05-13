import React from 'react';
import './card-list.styles.css';

import { Card} from '../card/card.component';

export const CardList = (props) => (
<div className='card-list'>
  {
    props.monsters.map(monster => (
        <Card  key={monster.id} monster={monster} />
   ))}
</div>
);

/* fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
        'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
})
.then(response => response.json())
.then(post => console.log(post)); */

/* const myAsyncFunction = async () => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id);
    const posts = await postResponse.json();
    console.log(posts);
} */