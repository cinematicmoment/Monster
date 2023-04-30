import React from 'react'
import Card from '../Card/Card';
import './CardList.scss';

export default function CardList({monsterList}) {
  return (
  
        <div className='cardList'>
            {monsterList.map((monster) => (
                <Card key={monster.id}
                id={monster.id}
               name={monster.name}
               email={monster.email}
               username={monster.username}
                />
            ))}
        </div>
  )
}
