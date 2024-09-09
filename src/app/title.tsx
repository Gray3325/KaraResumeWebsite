import Image from "next/image";




// 標題區塊
export  function Title(params:any) {
    return (
        <div className={params.divClass}>
            <h1 className={params.titleClass}>{params.title}</h1>
            {/* [ ]加入區塊名稱 */}
        </div>
    )
}

// 文字加圖片
function name(params:any) {
    return(
        <>
            <p className={params.textClass}>{params.text}</p>
            <Image src={params.imgUrl} alt={params.imgAlt}/>
        </>
    );
}