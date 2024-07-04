import styles from "./MusicList.module.css";

export function MusicList() {
  return (
    <ul className={styles.musicList}>
      <li className={styles.musicListItem}>
        <div className={styles.listItemInformation}>
          <span className={styles.musicTitle}></span>
          <span className={styles.musicDuration}>00:00</span>
          <span className={styles.musicArtist}>Art</span>
        </div>
      </li>
    </ul>
  );
}
