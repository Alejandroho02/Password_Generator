import { useRef, useState } from "react";

export const useGeneratorPassword = () =>  {

    const inputRef = useRef<HTMLInputElement>(null);

    const [password, setpassword] = useState("")

    const [hasnumber, sethasnumber] = useState(false)
    
    const [long, setLong] = useState(0)

    const [letterMay, setletterMay] = useState(false)

    const [letterMin, setletterMin] = useState(false)

    const [specialCharacters, setspecialCharacters] = useState(false)

    const handleLength = (sum?: boolean) => {
        if(sum === true){
            setLong((prev) => prev + 1)
        }else{
            setLong((prev) => Math.max(0, prev - 1));
        }
    }
    
    

    const handleGeneratorPassword = () => {


        if(hasnumber === true && letterMay === true && letterMin === true && specialCharacters === true){
            setpassword("sdknasdljasn")
            
        }else{
            setpassword("holaa")
        }
        console.log(password)

    }

    const handleCopyText = () =>{
        if(inputRef.current){
            navigator.clipboard.writeText(inputRef.current.value)
        }
    }

    const renderOptions = [
        {label: "options.hasupper", active: letterMay , onChange: setletterMay},
        {label: "options.haslower", active: letterMin , onChange: setletterMin},
        {label: "options.hasspecialcharacteres", active: specialCharacters , onChange: setspecialCharacters},
        {label: "options.hasnumbers", active: hasnumber , onChange: sethasnumber}

    ]


    return { 
        handleGeneratorPassword, 
        handleCopyText, 
        handleLength,
        setLong,
        renderOptions,
        password, 
        inputRef, 
        long
    };
}