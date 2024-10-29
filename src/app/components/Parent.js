import { useRouter } from "next/navigation"

const Parent =  ({children}) => {
    const router = useRouter() 

    const redirect = () => {
        router.back()
    }

    return(
        <div>
            <div>
                <div className="headers">
                    <button onClick={redirect}>
                        Home
                    </button>
                    <button onClick={() => router.push('/new')}>
                        New post
                    </button>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
                {children}
            </div>
        </div>
    )
}

export default Parent