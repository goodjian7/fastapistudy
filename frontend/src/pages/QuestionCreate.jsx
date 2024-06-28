import { useState } from "react"
import { isNullOrEmptyOrSpace } from "../utils"
import { produce} from "immer"


const QuestionCreate = ()=>{
    let [errorMessage, setErrorMessage] = useState("")
    let [questionInfo, setQuestionInfo] = useState({subject:"", content:""})

    const onQuestionSubjectChanged = (e)=>{
        // let nextState = {...questionInfo, 
        //     subject:e.target.value
        // }        

        let nextState=produce(questionInfo, draft=>{
            draft.subject = e.target.value
        })
        setQuestionInfo(nextState)
    }

    const onQuestionContentChanged = (e)=>{
        let nextState = {...questionInfo, 
            content:e.target.value
        }        
        setQuestionInfo(nextState)        
    }
    
    const onQuestionAddClicked = (e)=>{
        e.preventDefault()
        if(isNullOrEmptyOrSpace(questionInfo.subject) ||
            isNullOrEmptyOrSpace(questionInfo.content)){
                setErrorMessage("공백은 허용되지 않습니다.")
        }


    }

    

    return(
        <>
            <div className="container">
                <h5 className="my-3 border-bottom pb-2">
                    질문등록
                </h5>
                <div>{errorMessage}</div>                
                <form className="my-3">                    
                    <div className="mb-3">
                        <label>제목</label>                    
                        <input 
                            type="text" 
                            className="form-control" 
                            value={questionInfo.subject}
                            onChange={onQuestionSubjectChanged}
                            />
                    </div>
                    <div className="mb-3">
                        <label>내용</label>                    
                        <textarea 
                            rows="10" 
                            className="form-control" 
                            value={questionInfo.content}
                            onChange={onQuestionContentChanged}/>
                        <button className="btn btn-primary form-control my-3"
                            onClick={onQuestionAddClicked}>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default QuestionCreate 