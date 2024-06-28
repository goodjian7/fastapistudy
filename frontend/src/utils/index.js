const isNullOrEmptyOrSpace = (str)=>{
    try{
        if(str === null)
            return true

        if(str.trim() === ""){
            return true
        }
    }
    catch(error){
        return true
    }
    return false
}

export {isNullOrEmptyOrSpace}