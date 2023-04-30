import React, {useState, useEffect} from 'react';
import './Monsters.scss';
import CardList from './components/CardList/CardList';


function Monsters() { //api 호출 전 state 선언하기
  const [monsterList, setMonsterList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const mosterSearch = (e) =>
  {setSearchKeyword(e.target.value);
  };

  // const filteredItem = monsterList.filter((monster) => 
  // monster.name.toLowerCase().includes(searchKeyword.toLocaleLowerCase()))

  const filteredItem = monsterList.filter(({name}) => 
  name.toLowerCase().includes(searchKeyword.toLocaleLowerCase())) // 구조분해 할당 monster.name (X)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => result.json())
    .then((data) => setMonsterList(data));
  }, []);

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input onChange={mosterSearch} className="search" value={searchKeyword} placeholder="Search" />
      <CardList 
      monsterList={filteredItem}/>
    </div>
  );
}

export default Monsters;
