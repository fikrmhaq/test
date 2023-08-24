import React from "react"
import { useSelector } from "react-redux"
import Card from "../../components/card"

function Dashboard() {
    return (
        <div className="bg-red h-full grid content-center px-8">
            <Card className="bg-white w-full h-[85vh] border-0 p-8">
                <div className="h-full">
                    <p className="text-3xl font-bold">Dashboard</p>
                    <div className="grid content-center h-full">
                        <div className="flex justify-center">
                            <div className="bg-[#f2f2f2] w-[60vw] h-[50vh] text-center grid content-center rounded-xl">
                                <p className="text-5xl font-bold text-[#828282]">Selamat Datang</p>
                                <p className="text-3xl font-bold text-[#bdbdbd] mt-4">Tony Stark</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Dashboard