"use client";

import style from "./page.module.css";
import { useState } from "react";
import { MusicList } from "./_ui/components/MusicList";
import { AudioPlayer } from "./_ui/components/AudioPlayer";

const musics = [{ id: "1", title: "a", durationInSeconds: 95, artist: "adle", src:"/" }];

export default function Home() {
  const [width, setWidth] = useState(20);

  return (
    <div className={style.pageContainer}>
      <MusicList
        musics={musics}
        selectedMusic={musics[0]}
        onSelect={() => {}}
      />
      <AudioPlayer music={musics[0]}/>
     </div>
  );
}
