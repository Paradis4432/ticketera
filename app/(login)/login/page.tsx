import  Navbar  from "@/app/components/ui/navbar"
import { Buttons } from "@/app/components";
import Image from "next/image";
import bgImage from '../../../assets/bgimage.png'


function Page() {
    return (
        <main>
            <div className="w-full flex items-center justify-center h-[100vh] grid-cols-2">
                <div className="bg-black w-[50%] h-[100vh] overflow-clip">
                    <div className="absolute z-10 bg-black w-[50%] opacity-20">
                        <Image className="h-[100vh] w-[100%] overflow-hidden" src={bgImage} alt="" />
                    </div>
                </div>
                <div className="bg-white w-[50%] h-[100vh] content-center justify-center items-center">
                    <h2 className="flex justify-center mb-3 ">Inicia Sesion</h2>
                    <div className="flex justify-center">
                        <Buttons 
                        text="Usuario Logueado"
                        containerStyle="bg-blue-600 text-white rounded-xl py-[8px] px-[10px] text-lg font-normal tracking-wide gap-[10px] "
                        navigateTo='/home/logged'
                        />
                        <Buttons 
                        text="Usuario No Logueado"
                        containerStyle="bg-blue-600 text-white rounded-xl py-[8px] px-[10px] ml-[40px] text-lg font-normal tracking-wide gap-[10px]"
                        navigateTo='/'
                        />
                    </div>
                </div>
            </div>
        </main>
    ) 
}

export default Page;