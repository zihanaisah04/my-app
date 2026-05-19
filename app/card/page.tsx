export default function learnpage () {
    return (
<div className="bg-white rounded-xl h-65 w-63 flex justify-center pt-2">
  <div className="bg-blue-100 rounded-xl h-50 w-60 p-5 gap-3 ">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-black font-bold text-2xl">Web Design</h1>
        <p className="text-black text-sm">Craft angaging, user-friendly websites.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <p className="bg-blue-200 rounded-2xl text-[11px] text-black h-5 w-22 flex justify-center items-center">UI/UX Design</p>
        <p className="bg-blue-200 rounded-2xl text-[11px] text-black h-5 w-15 flex justify-center items-center">React</p>
        <p className="bg-blue-200 rounded-2xl text-[11px] text-black h-5 w-15 flex justify-center items-center">Tailwind</p>
      </div>
    </div>
    <div className="pt-11 flex justify-between">
      <p className="font-bold text-black">Explore</p>
      <div className="bg-gray-200 h-7 w-7 flex justify-center items-center rounded-md">
        <img src="/panah-2.svg" className="w-5" />
      </div>
    </div>
  </div>
</div>
    )
}