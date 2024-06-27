import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
    const apiUrl = import.meta.env.VITE_API_URL    
    let [questionList, setQuestionList] = useState([])
    useEffect(()=>{
        const getQuestionList = async()=>{
            try{
                const response = await axios.get(apiUrl+"/api/question/list")
                setQuestionList(response.data)            
            }
            catch(error){
                console.log("error while get question list")
                setQuestionList([{subject:"error", id:0}])
            }            
        }

        getQuestionList();        
    },[]);

    return (
        <div>
            <h1>questionList</h1>
            <ul>
            {
                questionList.map(
                    (question)=>{
                        return <li key={question.id}>
                                    <Link to={`/detail/${question.id}`}>{question.subject}</Link>
                               </li>
                    }
                )                
            }
            </ul>
        </div>
    );
};

export default Home