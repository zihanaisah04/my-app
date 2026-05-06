export default function learnpage() {
return (
    <div className="bg-blue-200 h-screen flex justify-center items-center gap-4">
        <div className="bg-pink-200 p-8 h-125 w-150 flex rounded-4xl pr-12 gap-8 flex flex-col ">
            <div>
                <img className="h-25 w-25 border-2 border-white rounded-full " src="https://randomuser.me/api/portraits/women/40.jpg" alt="profil"></img>
            <div className="flex flex-col ">
                <h1 className="text-4xl font-bold">Zihan Aisah Anugrah</h1>
                <div className="bg-green-100 h-6 w-20  ">
                <p className="text-sm">verified</p>
                </div>
            </div>
            <div className="bg-pink-400 rounded-4 h-6 w-20 border-2-black flex justify-center ">
                <h1 className="text black-200">klik here</h1>
            </div>
           </div>
        </div>   
    </div>
);
}