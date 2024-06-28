import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"

const StyledTextArea = styled.textarea`
    width:100%;
`

const Detail = () => {
    let params = useParams()
    let question_id = params?.question_id
    const apiUrl = import.meta.env.VITE_API_URL    

    let [questionInfo, setQuestionInfo] = useState({})
    let [answerList, setAnswerList] = useState([])
    let [newAnswerContent, setNewAnswerContent] = useState("")
    let [errorMessage, setErrorMessage] = useState("")

    const getQuestionInfo = async ()=>{
        try{
            let endpoint = apiUrl+`/api/question/detail/${question_id}`            
            let response=await axios.get(endpoint)            
            setQuestionInfo(response.data)        
            setAnswerList(response.data.answers)    
        }
        catch(error){
            console.log("error while getQuestionInfo")
        } 
    }      

    const onNewAnswerContentChanged = (e)=>{
        setNewAnswerContent(e.target.value)
    }

    const onAnswerAddClicked = async (e)=>{
        try{
            e.preventDefault()
            if(newAnswerContent.trim() === ""){
                setErrorMessage("공백은 사용할 수 없습니다.")
                return
            }

            let endpoint=apiUrl+`/api/answer/create/${question_id}`
            let response = await axios.post(endpoint, {content:newAnswerContent})
            if(response.status!=204){
                setErrorMessage("서버에서 잘못처리되었습니다.")
                return
            }
            setErrorMessage("")
            getQuestionInfo()
            setNewAnswerContent("")
        }
        catch(error){
            console.log("error while onanswerAddClicked")
        }        
    }

    useEffect(()=>{
        getQuestionInfo()                        
    },[])


    return (
        <>
            <div className="container">
                {/* 질문 */}
                <h1 className="border-bottom py-2">{questionInfo.subject}</h1>
                <div className="card my-3">
                    <div className="card-body">
                        <div className="card-text" style={{whiteSpace:"preLine"}}>
                            {questionInfo.content}
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="badge bg-light text-dark p-2">
                                {questionInfo.create_date}
                            </div>
                        </div>
                    </div>                    
                </div>
                
                {/* 답변목록 */}
                <div className="border-bottom my-3 py-2">
                    {answerList.length}개의 답변이 있습니다. 
                </div>         
                {
                    answerList.map((answer)=>{
                        return(                            
                            <div className="card my-3" key={answer.id}>
                                <div className="card-body">
                                    <div className="card-text" style={{whiteSpace:"preLine"}}>
                                        {answer.content} 
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div className="badge bg-light text-dark p-2">
                                            {answer.create_date}
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        )
                    })

                }

                {/* 답변등록 */}
                <div>{errorMessage}</div>
                <form className="my-3">
                    <textarea rows="10" style={{width:"100%"}} onChange={onNewAnswerContentChanged} value={newAnswerContent}/>
                    <div>
                    <input 
                        style={{width:"100%"}}
                        className="btn btn-primary"
                        type="submit" 
                        value="add" 
                        onClick={onAnswerAddClicked} 
                    />
                    </div>
                </form>

            </div>
        </>
    );
};

export default Detail