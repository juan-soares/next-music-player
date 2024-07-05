"use client";

import { useState } from "react";
import { MusicList } from "./_ui/components/MusicList";
import { Timeline } from "./_ui/components/Timeline";

const musics = [{ id: "1", title: "a", durationInSeconds: 95, artist: "adle" }];

export default function Home() {
  const [width, setWidth] = useState(20);

  return (
    <div>
      <MusicList
        musics={musics}
        selectedMusic={musics[0]}
        onSelect={() => {}}
      />
      <Timeline width={width} onChangeWidth={setWidth}/>
    </div>
  );
}
