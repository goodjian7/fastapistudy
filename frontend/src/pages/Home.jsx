import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { produce } from "immer";
import { rangeFromTo } from "../utils";
import QuestionCreate from "./QuestionCreate";
import QuestionList from "./QuestionList";

const Home = () => {    
    let [questionList, setQuestionList] = useState([])    

    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()    
    const pageOnSearchParam = Number(searchParams.get('page')) || 0
    let [pageSize, setPageSize] = useState(10)
    let [pageCount, setPageCount] = useState(0)

    console.log("pageOnSearchParam : " + pageOnSearchParam)

    return (
        <>
        <QuestionList pageIndex={pageOnSearchParam} pageSize={pageSize} pageCount={pageCount} />
        

        <div onClick={()=>{setPageSize(pageSize+1)}}>setPageSize++</div>
        <div onClick={()=>{setPageCount(pageCount+1)}}>setPageCount++</div>
        </>
    )
           
    // const getQuestionList = async(offset, limit)=>{
    //     try{            
    //         const response = await axios.get(apiUrl+`/api/question/list?offset=${offset}&limit=${limit}`)            
    //         setQuestionList(response.data.question_list)    
            
    //         let newPageInfo = produce(pageInfo, (draft)=>{draft.pageCount=Math.ceil(Number(response.data.total) / pageInfo.pageSize)})            
    //         setPageInfo(newPageInfo)
    //     }
    //     catch(error){
    //         console.log("error while get question list")
    //         setQuestionList([])
    //     }            
    // }

    // useEffect(()=>{                            
    //     let offset = pageInfo.pageIndex*pageInfo.pageSize
    //     let limit = pageInfo.pageSize
    //     getQuestionList(offset,limit)          
    // },[])

    // return (
    //     <>  
    //         <div className="container my-3">                
    //             <table className="table">
    //                 <thead>
    //                     <tr className="table-dark">
    //                         <th>번호</th>
    //                         <th>제목</th>
    //                         <th>작성일자</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {
    //                         questionList.map((question, idx)=>{                        
    //                             return(
    //                                 <tr key={question.id}>
    //                                     <td>{idx+1}</td>                            
    //                                     <td>
    //                                         <Link to={`/detail/${question.id}`}>{question.subject}</Link>                                            
    //                                     </td>
    //                                     <td>{question.create_date}</td>                                    
    //                                 </tr>                             
    //                             );
    //                         })        
    //                     }   
    //                 </tbody>
    //             </table>
                
    //             {/* 페이징 처리 시작 */}
    //             <ul className="pagination justify-content-center">
    //                 {/* 이전버튼 */}
    //                 <li className={classNames("page-item", {disabled:pageInfo.pageIndex<=0})}>
    //                     <button 
    //                         className="page-link"
    //                         onClick={()=>{
    //                           let newPageIndex = pageOnSearchParam-1    
    //                           //setPageInfo({...pageInfo, pageIndex:newPageIndex})                             
    //                           navigate(`/?page=${newPageIndex}`) 
    //                         }}
    //                     >
    //                         이전
    //                     </button>
    //                 </li>

    //                 {/* 페이지버튼 */}
    //                 {
    //                     rangeFromTo(-2,3,1).map((idx)=>{                            
    //                         let numBtn = pageInfo.pageIndex + idx
    //                         if(numBtn >= 0 && numBtn <= pageInfo.pageCount-1){
    //                             return(
    //                                 <li key= {idx }className={classNames("page-item", {active:numBtn===pageInfo.pageIndex})}>
    //                                     <button
    //                                         className="page-link"
    //                                         onClick={()=>{
    //                                             setPageInfo({...pageInfo, pageIndex:numBtn})
    //                                         }}>
    //                                         {numBtn}
    //                                     </button>
    //                                 </li>
    //                             )
    //                         }
    //                     })

    //                 }                    
                    
    //                 {/* 다음버튼 */}
    //                 <li className={classNames("page-item", {disabled:pageInfo.pageIndex>=pageInfo.pageCount-1})}>
    //                     <button 
    //                         className="page-link"
    //                         onClick={()=>{
    //                             let newPageIndex = pageOnSearchParam+1    
    //                             //setPageInfo({...pageInfo, pageIndex:newPageIndex})                            
    //                             navigate(`/?page=${newPageIndex}`) 
    //                         }}
    //                     >
    //                         다음
    //                     </button>

    //                 </li>
    //             </ul>
    //             {/* 페이징 처리 끝 */}

    //             <Link className="btn btn-primary" to="/question-create">add</Link>
    //             <button className="btn btn-secondary" onClick={()=>{setPageInfo({...pageInfo, pageIndex:1})}}>test</button>
    //         </div>                    
    //     </>
    // );
};

export default Home