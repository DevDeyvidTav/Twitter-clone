import bg from '../img/bg.png'



export function Main() {
    return(
        <div className="flex absolute gap-7 mr-7">
            <img className="w-2/4" src={bg} alt="" />
            <div className="mt-7 ">
                <img className="w-16 h-16 m" src="data:image/png;base64,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" alt="" />
                <div className="ml-1">
                    <p className="text-white font-sans text-7xl	font-black mt-16	">Acontecendo agora</p>
                    <p className="text-white text-3xl	font-black mt-12">Inscreva-se no twitter hoje mesmo.</p>
                    <div className="mt-8 grid w-80 gap-4">
                        <button className="	 font-sans text-black bg-white rounded-full px-8 py-2 hover:bg-zinc-400 transition-300">Inscreva-se com o Google</button>
                        <button className=" font-sans text-black bg-white rounded-full px-8 py-2 hover:bg-zinc-400">Inscreva-se com a Apple</button>
                    </div>
                    <div className="mt-2  grid w-80">    
                        <div className="flex justify-center align-center gap-3"><div className="bg-white h-px w-2/5 mt-3"></div> <p className="text-white">ou</p> <div className="bg-white h-px w-2/5 mt-3"></div></div>
                        <button className="mt-2 font-sans text-black bg-cyan-500	hover:bg-cyan-600 transition-300	 rounded-full px-8 py-2">Inscreva-se com numero de celular</button>
                    </div>
                    <div className="grid w-80 mt-2"><p className="text-zinc-400 text-xs	">Ao se inscrever, você concorda com os <span className="hover:underline text-cyan-500 cursor-pointer">Termos de Serviço</span> e a <span className="hover:underline text-cyan-500 cursor-pointer">Política de Privacidade</span>, incluindo o <span className="hover:underline cursor-pointer text-cyan-500">Uso de Cookies</span>.</p></div>
                    <p className="text-xl	mt-12 font-sans text-white">Já tem uma conta?</p>
                    <button className="	mt-4 font-sans px-32 bg-white rounded-full  py-2 text-cyan-500 hover:bg-cyan-100 transition-300">Entrar</button>
                </div>
            </div>
        </div>
    )
}