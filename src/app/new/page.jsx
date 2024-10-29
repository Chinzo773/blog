'use client'

import { useState } from "react"
import Parent from '../components/Parent'


const Page = () => {

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    function check(){
        if (inputValue == ''){
            setError('Must fill all')
        }else{
            setError(null)
            alert('succes')
        }
    }

    return(
        <Parent>
            <div style={{display:'flex',height:'100vh', flexDirection:'column', gap:'10px', justifyContent:'center'}}>
                <input onChange={e => setInputValue(e.target.value)}/>
                <button onClick={check}>Confirm</button>
                <span>{error}</span>
            </div>
        </Parent>
    )
}


export default Page