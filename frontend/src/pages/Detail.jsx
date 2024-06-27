import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import "../index.scss"

const Detail = () => {
    let params = useParams()
    let question_id = params?.question_id
    const apiUrl = import.meta.env.VTIE_API_URL

    useEffect(()=>{
        const getQuestionDetail = async ()=>{
            try{
            let response=await axios.get(apiUrl+`api/question/detail/${question_id}`)
            
            }
            catch(error){

            } 
        }   
                
    },[])


    return (
        <>
            <div>
                <h1>디테일</h1>
                <p>디테일페이지</p>
                <p>{question_id && question_id}</p>
                </div>
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
                </button>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                <button type="button" className="btn btn-primary">Primary</button>
            </div>
        </>
    );
};

export default Detail