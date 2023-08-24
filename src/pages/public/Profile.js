import { Avatar } from "@mui/material"
import React, { useRef } from "react"
import { useSelector } from "react-redux"
import Card from "../../components/card"
import Input from "../../components/input"
import Detail from "../../components/profile"
import Self from "./../../assets/self.jpg"

function Profile() {
    const userData = useSelector(state => state.userData)
    return (
        <div className="grid content-center h-full">
            <div className="flex justify-center">
                <div>
                    <p className="text-center text-5xl font-bold mb-8">Profile</p>
                    <Card className="w-[60vw]">
                        <div className="flex justify-between px-[5vw] py-8">
                            <div>
                                <Detail className="mb-10" label="Nama" value="Fikr Muhammad Haq" />
                                <Detail className="mb-10" label="Alamat" value="PCI II, E5-26, Bandung Barat" />
                                <Detail className="mb-10" label="No.HP" value="+62 877 2403 9619" />
                                <Detail className="mb-10" label="Email" value="fikrmuhammadhaq@gmail.com" />
                                <Detail className="mb-10" label="Motto" value="Do right." />
                            </div>
                            <div>
                                <Avatar src={Self}
                                sx={{width:110,height:110}} 
                                style={{ border:'2px solid', borderColor:'#837575' }} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Profile