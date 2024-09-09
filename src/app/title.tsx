



// 標題區塊
export  function TitleH1(params:any) {
    return (
        <div className={params.divClass}>
            <h1 className={params.titleClass}>{params.title}</h1>
            {/* [ ]加入區塊名稱 */}
            {params.nextFunction}
        </div>
    )
}

