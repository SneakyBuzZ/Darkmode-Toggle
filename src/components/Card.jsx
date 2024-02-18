

function Card() {
    return (
        <>
            <div className="container flex flex-col  w-1/4 mx-auto my-8 border border-gray-200 rounded-xl p-5 bg-slate-50 shadow-lg dark:bg-stone-800">
                <div className="imgcontainer h-60 object-cover">
                    <img className="w-full h-full object-cover rounded-md" src="https://i.pinimg.com/736x/02/bc/1d/02bc1ddfb478c7069ac1db5017955648.jpg" alt="" />
                </div>
                <div className="descontainer flex flex-col items-center  pt-5" >
                    <h1 className=" text-2xl py-3 font-serif font-bold text-gray-600 dark:text-stone-400 ">Monkey D. Luffy</h1>
                    <p className=" h-3/4 w-3/4 text-center text-sm pb-3 font-sans dark:text-stone-500">Monkey D. Luffy, the protagonist of the renowned manga and anime series One Piece, and boundless ambition.</p>
                </div>
            </div >
        </>
    )
}

export default Card
