import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";
import { IMusic } from "@/app/_lib/interfaces";
import { Timeline } from "../Timeline";

interface IProps {
    music: IMusic
}

export function AudioPlayer({music}:IProps){
   const [canPlay, setCanPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const width = useMemo(()=>{
        return (currentTime / duration) * 100
    },[duration,currentTime])
   const audioRef = useRef(null);

   useEffect(()=>{
    if(music){
        if(isPlaying){
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }
   },[isPlaying,music])

   useEffect(()=>{if(music){setCurrentTime(0), setCanPlay(false)}},[])
   useEffect(()=>{
    const interval = setInterval(()=>{
        isPlaying && setCurrentTime(audioRef.current.currentTime)
    },500);

    return ()=> clearInterval(interval);
   },[isPlaying])

   function onCanPlay(){
    setDuration(audioRef.current.duration);
setCanPlay(true)
   }

   function onEnded(){
    setIsPlaying(false);
   }


   function handlePlay(){
    if(music) {
        setIsPlaying(!isPlaying)
    }
   }

   function changeTime(percent:number){
if(music) {
    audioRef.current.currentTime = (percent / 100) * duration
}
   }

    return(
        <div className={styles.audioPlayer}>
            
   <div className={styles.playButtonContainer}>
    <button className={styles.playButton} disabled={!canPlay}>{isPlaying ? `\u2759\u2759` : `\u2588`}</button>
   </div>
   <Timeline width={width} onChangeWidth={changeTime}/>
   <audio className={styles.audio} ref={audioRef} 
   src={music.src}
   onCanPlay={onCanPlay}
   onEnded={onEnded}
   controls/>
        </div>
    )
}