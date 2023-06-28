import { useRouteError,redirect } from "react-router-dom";
import { mainFadeIn } from "../../app";

export default function ErrorPage() {
  const error = useRouteError();
  //console.error(error);

  return (
    <main className="main wrapper" style={{opacity:1}}>
       <div className="error">
        <p>
          お探しのページが存在しません｡<br/>
          お手数ですがTOPページへお戻り下さい｡<br/>
          エラー内容: {error.statusText || error.message}
        </p>
        </div>
    </main>
    
  );
  mainFadeIn();
}

