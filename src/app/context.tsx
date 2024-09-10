import Image from "next/image";

// 文字加圖片加線
export function Content(params: any) {
    // let text1=params.text1;
  return (
    <div className={params.divClass}>
      <p>{params.text1}</p>
      <p>{params.text2}</p>
      
      <Image src={params.imgUrl} alt={params.imgAlt} />
      {/* <hr/> */}
    </div>
  );
}

