import React from "react";
import Emoji from "./Emoji"

function Article({ title, date, preview, minutes }) {
    const dtDisplay = (date)=>{
        if (date){
            return date
        } else {
            return "January 1, 1970"
        }
    }
    const minDisplay = (minutes)=>{
        let items=[]
        if (minutes<30) {
            for (let i = 0; i < (minutes/5); i++) {
                items.push(<Emoji key={i} symbol="☕️"/>)
            }
        } else {
            for (let i = 0; i < (minutes/10); i++) {
                items.push(<Emoji key={i} symbol="🍱"/>)
            }
        }
        return items
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{dtDisplay(date)} · {minDisplay(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;