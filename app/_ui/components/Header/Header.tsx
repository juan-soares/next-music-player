import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <h1>
        Music <span>Player</span>
      </h1>
    </header>
  );
}
