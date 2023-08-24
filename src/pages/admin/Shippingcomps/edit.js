import axios from "axios";
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../../components/icon";
import Input from "../../../components/input";
import Card from "./../../../components/card"

function EditShippingComps() {
    const form_submit = useRef()
    const nav = useNavigate()
    const id = sessionStorage.getItem('id')
    const { register,
        handleSubmit,
        watch, formState: { errors } } = useForm()
    const queryClient = useQueryClient()
    const userData = useSelector(state => state.userData)

    const { data, isError, isLoading } = useQuery({
        queryKey: ["shippingcomps"],
        queryFn: async () => {
            return await axios.get(`${process.env.REACT_APP_BASE_URL}/finance/shippingComps`, { headers: { Authorization: `Bearer ${userData.data.data.access_token}` } })
        },
    });

    const mutation = useMutation({
        mutationFn: async (data) => {
            return await axios.put(`${process.env.REACT_APP_BASE_URL}/finance/shippingComps/${id}`, data, { headers: { Authorization: `Bearer ${userData.data.data.access_token}` } })
        },
        onSettled: async () => {
            queryClient.invalidateQueries(['shippingcomps'])
            nav('/shippingcomps')
        },
    })

    const mutateDelete = useMutation({
        mutationFn: async (data) => {
            return await axios.delete(`${process.env.REACT_APP_BASE_URL}/finance/shippingComps/${id}`, { headers: { Authorization: `Bearer ${userData.data.data.access_token}` } })
        },
        onSettled: async () => {
            queryClient.invalidateQueries(['shippingcomps'])
            nav('/shippingcomps')
        },
    })

    const onSubmit = (data) => {
        mutation.mutate(data)
    }

    return (
        <div className="bg-red h-full grid content-center px-8">
            <Card className="bg-white w-full h-[85vh] border-0 p-8">
                <div className="h-full">
                    <div className="flex justify-between">
                        <div className="flex">
                            <p className="text-3xl font-bold">Edit Shipping Comps</p>
                            <button className="bg-rose-400 px-3 rounded-full ml-4" onClick={() => mutateDelete.mutate()}><Icon.Trash color="#FFFFFF" /></button>
                        </div>
                    </div>
                    <div className="mt-12 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {
                                !isLoading &&
                                <div className="w-1/4">
                                    <Input label="Nama" defaultValue={isLoading ? "" : data.data.data.find((el) => el.id === parseInt(id)).name} labelclassName="text-lg" register={register("name", { required: true })} />
                                </div>
                            }
                            {errors.name && <p className="mt-2 font-semibold text-rose-500">Nama harus diisi</p>}
                            <input ref={form_submit} type="submit" className="hidden" />
                        </form>
                        <div className="mt-6">
                            <button className="bg-[#4678f3] rounded-3xl py-2 text-white font-semibold text-xl px-5" onClick={() => form_submit.current.click()}>Submit</button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default EditShippingComps