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
        <>
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

        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </div>
        </>
    );
};

export default Home