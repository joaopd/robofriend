import Card from '../../components/Card';
import Title from '../../components/Title';
import './styles.css';
import React, { useState, useEffect } from 'react';

export default function Body({ listCard }) {
  const [list, setList] = useState(listCard);
  const [text, setText] = useState('');

  useEffect(() => {
    if (text !== '') {
      const toLower = text.toLowerCase();
      const roboFilter = listCard.filter((item) => {
        return item.name.toLowerCase() === toLower;
      });
      console.log(list);
      setList(roboFilter);
    } else {
      setList(listCard);
    }
  }, [text]);

  return (
    <>
      <Title value={text} onChange={(search) => setText(search)} />
      <main>
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}
