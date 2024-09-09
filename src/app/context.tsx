import Image from "next/image";

// 文字加圖片加線
export function Content(params:any) {
    return(
        <div className={params.divClass}>
            <Image src={params.imgUrl1} alt={params.imgAlt1}/>
            <p className={params.textClass}>{params.text}</p>
            <Image src={params.imgUrl2} alt={params.imgAlt2}/>
            <hr/>
        </div>
    );
}

// 技能的裝飾
// export function OuterFrame(params:any){
//     return(
//         <div>
//             <p className={params.textClass}>{params.text}</p>
//         </div>
        
//     )

// }
