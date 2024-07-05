import styles from "./MusicList.module.css";
import { IMusic } from "@/app/_lib/interfaces";
import { displayFormatedTime } from "@/app/_lib/utils";

interface IProps {
  musics: IMusic[];
  selectedMusic: IMusic;
  onSelect: (musicTitle: string) => void;
}

export function MusicList({ musics, selectedMusic, onSelect }: IProps) {
  function isSelected(musicTitle: string) {
    return selectedMusic.title === musicTitle ? styles["selected"] : "";
  }

  return (
    <ul className={styles.musicList}>
      {musics.map(({ title, durationInSeconds, artist }) => (
        <li
          className={[styles["musicListItem"], isSelected(title)].join(" ")}
          onClick={() => onSelect(title)}
        >
          <div className={styles.listItemInformation}>
            <span className={styles.musicTitle}>{title}</span>
            <span className={styles.musicDuration}>
              {displayFormatedTime(durationInSeconds)}
            </span>
            <span className={styles.musicArtist}>{artist}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
