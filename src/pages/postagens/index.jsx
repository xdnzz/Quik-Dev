import { useEffect, useState } from 'react';
import * as P from './style';

export default function Postagens(){
    const [data, setData] = useState([])

    useEffect(()=>{
        const get = JSON.parse(localStorage.getItem('Postagem'));
        setData(JSON.stringify(get.data))
    },[]);

 

    console.log(data)
    return (
            <P.Container>   
                Postagens
                {/* {data.map((e)=>{
                    return <div>{e.content}</div>
                })} */}
            </P.Container>
    )
}