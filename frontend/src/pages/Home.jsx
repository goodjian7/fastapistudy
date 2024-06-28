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
            <div className="container my-3">
                <h1 className="text-center">Question List</h1>
                <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questionList.map((question, idx)=>{                        
                                return(
                                    <tr key={question.id}>
                                        <td>{idx+1}</td>                            
                                        <td>
                                            <Link to={`/detail/${question.id}`}>{question.subject}</Link>
                                        </td>
                                        <td>{question.create_date}</td>                                    
                                        </tr>                             
                                );
                            })        
                        }   
                    </tbody>
                </table>
            </div>                    
        </>
    );
};

export default Home