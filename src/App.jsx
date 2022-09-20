import { Background } from "./components/Backgrund";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";



export function App(){
  return(
    <div className="grid max-w-full">
       <Background/>
       <Main/>
       <Footer/>
    </div>
  )
}