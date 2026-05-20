"use client";
import react from "react";
export default function learpage() {
    const [carimakanan, setcarimakanan] = react. useState("");

    const daftarMenu = [
        {id: 1, nama: "nasi padang", harga: "27.000", kategori: "makanan berat" },
        {id: 2, nama: "gudeg jogja", harga: "28.000", kategori: "makanan berat" },
        {id: 3, nama: "nasi goreng", harga: "17.000", kategori: "makanan berat" },
        {id: 4, nama: "es teh manis", harga: "6.000", kategori: "minuman" },
        {id: 5, nama: "es jeruk", harga: "6.000", kategori: "minuman" },
    ];

    const menutersaring = daftarMenu.filter((menu) => menu.nama.toLowerCase().includes(carimakanan.toLowerCase()));
    return (
<div className="bg-blue-200 min-h-screen flex flex-col items-center p-6">
        <div className="bg-yellow-100 mx-auto shadow-md rounded-lg p-4 mt-5 w-200">
            <h1 className="font-bold text-yellow-500 text-2xl text-center">daftar menu</h1>
           <span className="text-gray-400 pl-2 hover:bg-purple-200"><search className="svg"></search></span>
           <img src={"search.svg"} alt="Search" />
           <input
             type="text"
             placeholder="Cari makanan..."
             className="w-full p-1 outline-none text-black text-sm"
             value={carimakanan}
             onChange={(e) => setcarimakanan(e.target.value)}
    />
        </div>
        <div className="bg-green-100 mx-auto shadow-md rounded-lg p-6 max-w-6xl mt-12 h-165 flex gap-4">
            {menutersaring.map((menu) => (
                <div key={menu.id} className="bg-pink-100 p-4 mb-4 shadow-md rounded-lg h-35">
                    <h3 className="font-bold text-lg">{menu.nama}</h3>
                    <p className="text-gray-600">Harga: {menu.harga}</p>
                    <p className="text-blue-500">{menu.kategori}</p>
                </div>
            ))}
        </div>
</div>
    );
}
