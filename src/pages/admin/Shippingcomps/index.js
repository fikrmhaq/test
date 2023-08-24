import axios from "axios";
import React, { useState } from "react"
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../../components/icon";
import Input from "../../../components/input";
import array from "../../../functions/array";
import Card from "./../../../components/card"

function ShippingComps() {
    const nav = useNavigate()
    const userData = useSelector(state => state.userData)
    const { data, isError, isLoading } = useQuery({
        queryKey: ["shippingcomps"],
        queryFn: async () => {
            return await axios.get(`${process.env.REACT_APP_BASE_URL}/finance/shippingComps`, { headers: { Authorization: `Bearer ${userData.data.data.access_token}` } })
        },
    });
    const [search, setSearch] = useState('')

    return (
        <div className="bg-red h-full grid content-center px-8">
            <Card className="bg-white w-full h-[85vh] border-0 p-8">
                <div className="h-full">
                    <div className="flex justify-between">
                        <div className="flex">
                            <p className="text-3xl font-bold">Shipping Comps</p>
                            <button className="bg-[#4678f3] px-3 rounded-full ml-4" onClick={() => nav('/shippingcomps/tambah')}><Icon.Add color="#FFFFFF" /></button>
                        </div>
                        <div>
                            <div className="flex border-2 rounded-lg p-2">
                                <Icon.Search color="#bdbdbd" />
                                <input
                                placeholder="Cari"
                                    className={`ml-2`}
                                    onChange={ev => setSearch(ev.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 ">
                        <div className="py-4 text-xl font-bold px-6 rounded-xl bg-[#f2f2f2]">
                            Nama
                        </div>
                        {
                            !isLoading &&
                            data.data.data
                            .filter(el => array.search(el,search))
                            .map(el => {
                                return (
                                    <div className="py-6 text-lg font-bold px-6 rounded-xl border-b-[1px] text-[#8b8b8b]" onClick={() => {
                                        nav(`/shippingcomps/edit`)
                                        sessionStorage.setItem('id', el.id)
                                    }}>
                                        {el.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ShippingComps