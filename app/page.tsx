import { MusicList } from "./_ui/components/MusicList";

const musics = [{ id: "1", title: "a", duration: "0:00", artist: "adle" }];

export default function Home() {
  return (
    <div>
      <MusicList musics={musics} selectedMusic={musics[0]} />
    </div>
  );
}
