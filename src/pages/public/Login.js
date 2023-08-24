import axios from "axios"
import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Card from "../../components/card"
import Input from "../../components/input"
import {set} from "./../../common/states/reducers/user"

function Login() {
    const form_submit = useRef()
    const nav = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    

    const login = async(data) => {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/authentication/login`, data)
        if(res.data.success) {
            dispatch(set(res.data.data))
            nav('/dashboard')
        }

    }
    const onSubmit = (data) => login(data)

    return (
        <div className="grid content-center h-full">
            <div className="flex justify-center">
                <div>
                    <p className="text-center text-5xl font-bold mb-8">Login</p>
                    <Card className="w-[50vw]">
                        <div className="px-[5vw] py-16">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input label="Email" register={register("email", { required: true })} />
                                <br />
                                <Input label="Password" type="password" register={register("password", { required: true })} />
                                <input ref={form_submit} type="submit" className="hidden" />
                            </form>
                            <div className="px-8 mt-14">
                                <button className="bg-[#4678f3] w-full rounded-3xl py-3 text-white font-semibold text-2xl" onClick={() => form_submit.current.click()}>Login</button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Login