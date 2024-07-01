import { useNavigate } from "react-router-dom"

const QuestionList = ({pageIndex=0, pageSize=10, pageCount})=>{
    const navigate = useNavigate()
    console.log("QuestionList rendered")
    return (
        <>
        <h1>QuestionList</h1>
        <div>{pageIndex}</div>
        <div>{pageSize}</div>
        <div>{pageCount}</div>
        <div onClick={()=>navigate(`/?page=${pageIndex-1}`)}>이전</div>
        <div onClick={()=>navigate(`/?page=${pageIndex+1}`)}>다음</div>
        </>
    )
}

export default QuestionList