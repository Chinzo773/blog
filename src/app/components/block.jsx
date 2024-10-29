
import Link from "next/link"
import { useRouter } from "next/navigation";

const Block = (props) => {
    const {data} = props
    const router = useRouter()

    const redirect = () => {
        router.push(data.id.toString())
    }

    return(
        <div className="card" onClick={redirect}>
            <div className="coverImg">
                <img src={data.cover_image}/>
            </div>
            <div className="description">
                <span className="category">
                    {data.tag_list[0]}
                </span>
                <div style={{fontSize:'20px'}}>
                    {data.title}
                </div>
                <div className="descriptionStyle">
                    {data.description}
                </div>
            </div>
            <div style={{display:'flex', gap:'10px'}} className="pos">
                <div>
                    <img src={data.user.profile_image} style={{width:'30px', borderRadius:'50%'}}/>
                </div>
                <div>
                    {data.user.name}
                </div>
            </div>  
        </div>
    )
}


export default Block