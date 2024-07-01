import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { produce } from "immer";



const Home = () => {
    const apiUrl = import.meta.env.VITE_API_URL    
    let [questionList, setQuestionList] = useState([])
    let [pageInfo, setPageInfo] = useState({pageIndex:0, pageSize:10, pageCount:-1})
    

    const getQuestionList = async(offset, limit)=>{
        try{            
            const response = await axios.get(apiUrl+`/api/question/list?offset=${offset}&limit=${limit}`)            
            setQuestionList(response.data.question_list)            
            let newPageInfo = produce(pageInfo, (draft)=>{
                draft.pageCount = Math.ceil(Number(response.data.total) / draft.pageSize)
            })            
            setPageInfo(newPageInfo)

        }
        catch(error){
            console.log("error while get question list")
            setQuestionList([])
        }            
    }

    useEffect(()=>{        
        let offset = pageInfo.pageIndex*pageInfo.pageSize
        let limit = pageInfo.pageSize
        getQuestionList(offset,limit);                
    },[pageInfo]);

    return (
        <>  
            <div className="container my-3">                
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
                
                {/* 페이징 처리 시작 */}
                <ul className="pagination justify-content-center">
                </ul>
                {/* 페이징 처리 끝 */}

                <Link className="btn btn-primary" to="/question-create">add</Link>
                <button className="btn btn-secondary" onClick={()=>{setPageInfo({...pageInfo, pageIndex:1})}}>test</button>
            </div>                    
        </>
    );
};

export default Home