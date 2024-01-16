import {useState} from 'react';
import { sculptureList } from "./response";
import './Addcard.css'
import Card from './Card';

function AddCard(){
    const [imgURL, setImgURL] = useState();
    const [heading, setHead] = useState();
    const [desc, setDesc] = useState();

    function URLHandler(){
        setImgURL(event.target.value)
    }
    function headHandler(){
        setHead(event.target.value)
    }
    function descHandler(){
        setDesc(event.target.value)
    }
    return (
        <form>
            <div>
                <label onChange={URLHandler}>Image URL:</label>
                <input type="text" ></input>

                <label onChange={headHandler}>Heading:</label>
                <input type="text"></input>

                <label onChange={descHandler}>Description</label>
                <input type="text"></input>

                <button type='submit'>Add Card</button>
            </div>
        </form>
    )
}
export default AddCard;