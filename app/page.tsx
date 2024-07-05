"use client";

import { MusicList } from "./_ui/components/MusicList";

const musics = [{ id: "1", title: "a", durationInSeconds: 95, artist: "adle" }];

export default function Home() {
  return (
    <div>
      <MusicList
        musics={musics}
        selectedMusic={musics[0]}
        onSelect={() => {}}
      />
    </div>
  );
}
