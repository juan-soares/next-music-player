"use client";

import style from "./page.module.css";
import { createContext, useState } from "react";
import { MusicList } from "./_ui/components/MusicList";
import { AudioPlayer } from "./_ui/components/AudioPlayer";
import { useApp } from "./_lib/hooks";

export const AppContext = createContext({});

export default function Home() {

  const useAppValues = useApp();


  return (
    <AppContext.Provider value={useAppValues}>
    <div className={style.pageContainer}>
      <MusicList
        
      />
      <AudioPlayer/>
     </div>
     </AppContext.Provider>
  );
}
