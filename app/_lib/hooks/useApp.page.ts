import { useState } from "react";
import { IMusic } from "../interfaces";

const musicList = [{ id: "1", title: "a", durationInSeconds: 95, artist: "adle", src:"/" }];

export function useApp(){
    const [selectedMusic, setSelectedMusic] = useState<IMusic>({});
    const [time, setTime] = useState(0);

    function selectMusic(music:IMusic){
setSelectedMusic(music);
setTime(0);
    }
    
    return {musicList, selectMusic, selectedMusic, time, setTime}
}