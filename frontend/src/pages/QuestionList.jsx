import React from "react";
import { useNavigate, Link } from "react-router-dom"
import classNames from "classnames";
import {rangeFromTo} from "../utils"

const QuestionList = ({questionList, pageIndex, displayCount, totalCount,})=>{
    console.log("QuestionList is rendered")
    let minPageIndex = 0
    let maxPageIndex = Math.ceil(totalCount/displayCount)    
    const navigate = useNavigate()   
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
                    {/* 이전버튼 */}
                    <li className={classNames("page-item", {disabled:pageIndex<=minPageIndex})}>
                        <button 
                            className="page-link"
                            onClick={()=>{                                                               
                              navigate(`/?page=${pageIndex-1}`) 
                            }}
                        >
                            이전
                        </button>
                    </li>

                    {/* 페이지버튼 */}
                    {
                        rangeFromTo(-2,3,1).map((idx)=>{                            
                            let newPageIndex = pageIndex + idx
                            if(newPageIndex >= 0 && newPageIndex <= maxPageIndex){
                                return(
                                    <li key= {idx }className={classNames("page-item", {active:newPageIndex===pageIndex})}>
                                        <button
                                            className="page-link"
                                            onClick={()=>{
                                                navigate(`/?page=${newPageIndex}`)
                                            }}>
                                            {newPageIndex}
                                        </button>
                                    </li>
                                )
                            }
                        })

                    }                    
                    
                    {/* 다음버튼 */}
                    <li className={classNames("page-item", {disabled:pageIndex>=maxPageIndex})}>
                        <button 
                            className="page-link"
                            onClick={()=>{                                
                                navigate(`/?page=${pageIndex+1}`) 
                            }}
                        >
                            다음
                        </button>

                    </li>
                </ul>
                {/* 페이징 처리 끝 */}

                {/* 새 질문 등록 */}
                <Link className="btn btn-primary" to="/question-create">add</Link>                
            </div>                    
        </>
    );
}

export default QuestionList