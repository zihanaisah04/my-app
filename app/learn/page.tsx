export default function Learn() 
{
    return(
        <div className="bg-white gap-y flex flex gap-4 flex-row justify-center m-10 max-auto" >
            <div className="grid grid-cols-12 gap-6 max-w-6xl justify-items-center">
                    {/* CARD NOMOR 1 */}
                <div className="col-span-6 bg-cyan-50 text-cyan-800 h-72 w-110 p-4 flex flex-col justify-between rounded-4xl">
                    <div className="flex gap-2">
                        <img src="/palette.svg" alt="Icon palette"/>
                        <p className="font-bold">Design</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Adobe Photoshop</h1>
                       <div className="flex justify-between">
                        <p>in 3 days</p>
                        <div className="flex -space-x-3">
                            <img className="w-7 h-7 rounded-full border-2 border-cyan-50 object-cover" src="https://i.pravatar.cc/300?u=1" alt="user 1" />
                            <img className="w-7 h-7 rounded-full border-2 border-cyan-50 object-cover" src="https://i.pravatar.cc/100?u=2" alt="user 2" />
                            <img className="w-7 h-7 rounded-full border-2 border-cyan-50 object-cover" src="https://i.pravatar.cc/100?u=3" alt="user 3" />
                            <div className="flex items-center justify-center w-7 h-7 text-xs font-medium text-cyan-800 bg-cyan-100 border-2 border-cyan-50 rounded-full">
                                +9
                             </div>
                         </div>
                       </div>
                        
                    </div>  
                </div>

                {/* CARD NOMOR 2 */}
                <div className="col-span-6 bg-green-50 text-green-900 h-72 w-110 p-4 flex flex-col justify-between rounded-3xl">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-2 items-center">
                            <img src="/terminal-2.svg" alt="Icon terminal"/>
                            <p className="font-bold">AI</p>
                        </div>
                            
                        <div className="flex-justify-between items-end">
                            <img src="/star.svg" alt="Icon" className="w-5 h-5"/>
                        </div>
                    </div>
                   
                    <div>
                        <h1 className="text-3xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</h1>
                        <div className="flex justify-between">
                            <p>in 5 days</p>
                            <div className="flex -space-x-3">
                            <img className="w-7 h-7 rounded-full border-2 border-cyan-50 object-cover" src="https://i.pravatar.cc/100?u=1" alt="user 1" />
                            <img className="w-7 h-7 rounded-full border-2 border-cyan-50 object-cover" src="https://i.pravatar.cc/100?u=2" alt="user 2" />
                            <img className="w-7 h-7 rounded-full border-2 border-cyan-50 object-cover" src="https://i.pravatar.cc/100?u=3" alt="user 3" />
                            <div className="flex items-center justify-center w-7 h-7 text-xs font-medium text-cyan-800 bg-cyan-100 border-2 border-cyan-50 rounded-full">
                                +3
                             </div>
                         </div> 
                        </div>
                    </div>
                </div>

                {/* CARD NOMOR 3 */}   
                <div className="col-span-4 bg-purple-100 text-purple-950 h-72 w-72 p-4 flex flex-col justify-between rounded-4xl">
                    <div className="flex gap-2">
                        <img src="/palette.svg" alt="Icon palette"/>
                        <p className="font-bold">Design</p>
                    </div>
                    <div className="">
                        <h1 className="text-4xl font-bold">Figma</h1>
                        <p> 8 hours ago</p>
                    </div>
                </div>

                {/* CARD NOMOR 4 */}   
                <div className="col-span-4 bg-orange-100 text-orange-900 h-72 w-72 p-4 flex flex-col justify-between rounded-4xl">
                    <div className="flex gap-2">
                        <img src="/code.svg" alt="Icon code"/>
                        <p className="font-bold">Codding</p>
                    </div>
                    <div className="">
                        <h1 className="text-4xl font-bold">Python</h1>
                        <p> 2 days ago</p>
                    </div>
                </div>

                {/* CARD NOMOR 5 */}   
                <div className="col-span-4 bg-red-100 text-red-900 h-72 w-72 p-4 flex flex-col justify-between rounded-4xl">
                    <div className="flex gap-2">
                        <img src="/palette.svg" alt="Icon palette"/>
                        <p className="font-bold">Design</p>
                    </div>
                    <div className="">
                        <h1 className="text-4xl font-bold">Sketch</h1>
                        <p> 4 days ago</p>
                    </div>
                </div>
            </div>

        </div>
        
    )
}