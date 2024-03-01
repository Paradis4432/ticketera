import Header from "@/app/components/Header";
import Destacados from "@/app/components/Destacados";

export default function page(){
    return(
        <div className="container-fluid">
            <Header></Header>

            <Destacados></Destacados>

        </div>
    )
}