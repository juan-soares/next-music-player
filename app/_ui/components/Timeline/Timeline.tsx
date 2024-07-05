import styles from "./Timeline.module.css";

interface IProps {
    width: number;
    onChangeWidth: (width:number) => void
}

export function Timeline({width, onChangeWidth}:IProps){
    
    return(<div className={styles.timeline}>
        <div className={styles.timelineBar} style={{'--width':`${width}%`}}/>
        <input type="range" className={styles.timelineSlider} 
        onChange={({target:{value}})=>{onChangeWidth(parseInt(value))}}/>
    </div>)
}