export default function Button({ title, imgsrc }: { title: string; imgsrc: string }) {
    return (
        <button className="py-2 flex justify-between items-center w-full">
            <p> {title}</p>
            <div className="">

            </div>
      <img src={imgsrc} />
    </button>
    );
}