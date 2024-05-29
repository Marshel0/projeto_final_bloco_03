
function Home() {
    return (
        <>

            <div className="bg-red-500 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold"> Seja bem vindo! </h2>
                        <p className="text-xl"> Aqui você encontra remédios abençoados com preços em conta. </p>
                    </div>

                    <div className="flex justify-center">
                        <img src="/src/assets/images/2.png"
                            alt="Imagem Home" className="w-2/3" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;