'use client'

import { redirect, usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Parent from '../components/Parent'

const IdThing = () => {
    const path = usePathname()
    const [data, setData] = useState([])
    // const router = useRouter() 

    const datafetch = async() => {
        try {
            const raw = await fetch(`https://dev.to/api/articles${path}`)
            const datas = await raw.json()
            setData(datas)
        } catch (error) {
            console.error("Failed to fetch data:", error)
        }
    }
    // datafetch()

    useEffect(() => {
        datafetch()
        console.log(data)
    }, [path])

    // const redirect = () => {
    //     router.back()
    // }

    return (
        <Parent>
            <div id="details">
                <div>
                    <img style={{width:'800px'}} src={data.cover_image}/>
                </div>
                <div>
                    <div style={{fontSize:'30px'}}>{data.title}</div>
                    <div style={{marginTop:'10px'}}>{data.description}</div>
                </div>
                <div>
                    <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
                        <div>
                            <img src={data?.user?.profile_image} style={{width:'30px', borderRadius:'50%'}}/>
                        </div>
                        <div>
                            {data?.user?.name}
                        </div>
                    </div>
                    <div style={{color:'gray', fontSize:'13px', marginTop:'10px'}}>
                        Published at {data.published_at}
                    </div>
                </div>
            </div>
        </Parent>

    )
}

export default IdThing