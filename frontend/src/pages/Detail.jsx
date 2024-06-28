import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import "../index.scss"
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
            <div>
                <h1>{questionInfo?.subject && questionInfo.subject}</h1>
                <p>{questionInfo?.content && questionInfo.content}</p>
                <ul>
                    {answerList.map((answer)=><li key={answer.id}>{answer.content}</li>)}
                </ul>
                <div>{errorMessage !== "" && errorMessage}</div>
                <StyledTextArea
                    onChange={onNewAnswerContentChanged} 
                    value={newAnswerContent}>

                </StyledTextArea>           
                <div>
                    <button onClick={onAnswerAddClicked}>add</button>
                </div>                
            </div>
        </>
    );
};

export default Detail