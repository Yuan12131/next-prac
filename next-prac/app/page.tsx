'use client';
import styles from './page.module.css'
import { useState } from 'react';



interface Members{
  hash:string;
  name:string;
  content:string;
}


const memberData:Members[] = [
  { hash: 'lee', name: '이유안', content: '이유안 소개' },
  { hash: 'bang', name: '방승희', content: '방승희 소개' },
];


export default function Home() {
  const [section, setSection] = useState('');

  const nameClick = (targetSection:string) => {
    setSection(targetSection);
    window.location.hash = `#${targetSection}`;
  };

  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <ul>
        {memberData.map(({ hash, name }) => (
            <li key={hash} onClick={() => nameClick(hash)}>{name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.board}>
      {memberData.map(({ hash, content }) => (
          <div key={hash} id={hash} style={{ display: section === hash ? 'block' : 'none' }}>
            {content}
          </div>
        ))}
      </div>
    </main>
  )
}