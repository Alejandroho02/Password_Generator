import { useRef, useState } from "react";

export const useGeneratorPassword = () =>  {

    const inputRef = useRef<HTMLInputElement>(null);

    const [password, setpassword] = useState("")

    const [hasnumber, sethasnumber] = useState(false)
    
    const [long, setLong] = useState(10)

    const [letterMay, setletterMay] = useState(true)

    const [letterMin, setletterMin] = useState(true)

    const [specialCharacters, setspecialCharacters] = useState(false)

    const handleLength = (sum?: boolean) => {
        if(sum === true){
            setLong((prev) => prev + 1)
        }else{
            setLong((prev) => Math.max(0, prev - 1));
        }
    }
    
    

    const handleGeneratorPassword = () => {
        if (long === 0) return;

        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";

        let charset = "";
        const guaranteed: string[] = [];

        if (letterMay) {
            charset += uppercase;
            guaranteed.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
        }
        if (letterMin) {
            charset += lowercase;
            guaranteed.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
        }
        if (hasnumber) {
            charset += numbers;
            guaranteed.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }
        if (specialCharacters) {
            charset += special;
            guaranteed.push(special[Math.floor(Math.random() * special.length)]);
        }

        if (charset === "") return;

        const remaining = Array.from({ length: long - guaranteed.length }, () =>
            charset[Math.floor(Math.random() * charset.length)]
        );

        const combined = [...guaranteed, ...remaining]
            .sort(() => Math.random() - 0.5)
            .join("");

        setpassword(combined);
    }

    const handleCopyText = () =>{
        if(inputRef.current){
            navigator.clipboard.writeText(inputRef.current.value)
        }
    }

    const renderOptions = [
        {label: "options.hasupper", active: letterMay , onChange: setletterMay},
        {label: "options.haslower", active: letterMin , onChange: setletterMin},
        {label: "options.hasspecialcharacters", active: specialCharacters , onChange: setspecialCharacters},
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