import { IMusic } from "@/app/_lib/interfaces";
import styles from "./MusicList.module.css";

interface IProps {
  musics: IMusic[];
  selectedMusic: IMusic;
}

export function MusicList({ musics, selectedMusic }: IProps) {
  function isSelected(musicTitle: string) {
    return selectedMusic.title === musicTitle ? styles["selected"] : "";
  }

  return (
    <ul className={styles.musicList}>
      {musics.map(({ title, duration, artist }) => (
        <li className={[styles["musicListItem"], isSelected(title)].join(" ")}>
          <div className={styles.listItemInformation}>
            <span className={styles.musicTitle}>{title}</span>
            <span className={styles.musicDuration}>{duration}</span>
            <span className={styles.musicArtist}>{artist}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
