export function Footer(){
    return (
        <div className="bg-black text-white text-xs w-screen max-w-full">    
            <div className="flex gap-6 justify-center items-center">    
                <p className="cursor-pointer hover:underline">Sobre</p>
                <p className="cursor-pointer hover:underline">Central de Ajuda</p>
                <p className="cursor-pointer hover:underline">Termos de Serviço</p>
                <p className="cursor-pointer hover:underline"> Política de Privacidade</p>
                <p  className="cursor-pointer hover:underline" >Política de cookies</p>
                <p className="cursor-pointer hover:underline" >Política deAcessibilidade</p>
                <p className="cursor-pointer hover:underline">Informações de anúncios</p>
                <p className="cursor-pointer hover:underline" >Blog</p>
                <p className="cursor-pointer hover:underline">Status</p>
                <p className="cursor-pointer hover:underline" >Carreiras</p>
                <p className="cursor-pointer hover:underline">Recursos da marca</p>
                <p className="cursor-pointer hover:underline" >Publicidade</p>
                <p className="cursor-pointer hover:underline">Marketing</p>
                <p className="cursor-pointer hover:underline">Twitter para Empresas</p>
            </div>
            <div className="flex gap-6 justify-center items-center mt-2 mb-4 ">
                <p className="cursor-pointer hover:underline">Desenvolvedores</p>
                <p className="cursor-pointer hover:underline">Diretório</p>
                <p className="cursor-pointer hover:underline">Configurações</p>
                <p className="cursor-pointer hover:underline">© 2022 Twitter, Inc.</p>
            </div>
        </div>
    )
}