"use client";
import react, { useState } from "react";
export default function CardScheduleDestination() {
    const ListJadwal = [
        {id: 1, hari: "sen", tanggal: "18 mei 2026", harga: "IDR 4.156.740" },
        {id: 2, hari: "sel", tanggal: "19 mei 2026", harga: "IDR 3.474.666" },
        {id: 3, hari: "rab", tanggal: "20 mei 2026", harga: "IDR 3.450.678" },
        {id: 4, hari: "kam", tanggal: "21 mei 2026", harga: "IDR 3.450.678" },
        {id: 5, hari: "jum", tanggal: "22 mei 2026", harga: "IDR 3.510.124" },
        {id: 6, hari: "sab", tanggal: "23 mei 2026", harga: "IDR 3.527.640" },
        {id: 7, hari: "min", tanggal: "24 mei 2026", harga: "IDR 3.510.124" },
        {id: 8, hari: "sen", tanggal: "25 mei 2026", harga: "IDR 4.520.164" },
    ];
    const [selectedId, setSelectedId] = useState(2);
    return (
        <div className="w-full overflow-x-auto border-b border-gray-200 bg-white">
            <div className="flex ">

                {ListJadwal.map((item)=>{
                    const isActive = item.id === selectedId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                                className={`flex flex-col items-center justify-center px-4 py-3 border-r border-gray-200 min-w-[140px] transition-all duration-200 focus:outline-none ${isActive ? "bg-blue-50 border-b-4 border-b-blue-500 text-blue-600" : "bg-white hover:bg-gray-50 text-gray-500 "}`}
            >
                    <span className="text-xs font-medium">
                        {item.hari}, {item.tanggal}
                    </span>
                    <span className="text-sm font-bold mt-1 text-gray-800">
                        {item.harga}
                    </span>
                        </button>
            );
        })}
            </div>
        </div>
    );
}