
export function AddLine(params:any){
    return(
        <div className={params.Class}>
            <p>{params.text}</p>
            <hr className={params.hrClass}/>
        </div>
    )
}