import Button from "./_component_sidebar/button";

export default function sidebar() {
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <div className="bg-gray-500 p-8 h-125 w-150 flex rounded-4xl pr-12 gap-8 flex flex-col shadow-md mx-auto justify-between">
                <div>
        <img className="h-25 w-25 rounded-3xl" src="https://r1.community.samsung.com/t5/image/serverpage/image-id/6317953iCF1DDB9CC0090194/image-dimensions/1500?v=v2&px=-1" alt="profil"></img>
            <div className="flex flex-col gap-3">
        <h2 className="font-bold text-white text-xl">Acme Inc</h2>
        <p className="text-white">Enterprise</p>
         </div>
        </div>
            </div>
        </div>
    );
}