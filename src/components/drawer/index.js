import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { Icon } from "../icon"
import Menu from "./menu"
import {clear} from "./../../common/states/reducers/user"
import axios from "axios"

function Drawer() {
    const userData = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const location = useLocation()

    const logout = async(data) => {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/authentication/logout`, null,{ headers: { Authorization: `Bearer ${userData.data.data.access_token}` } })
        if(res.data.success) {
            dispatch(clear())
            nav('/')
        }

    }

    return (
        <div className={`w-[20vw] bg-[#f2f2f2] ${userData.set ? 'block' : 'hidden'}`}>
            <div className="h-1/2">
                <Menu active={location.pathname === '/dashboard'} icon="Home" title="Dashboard" onClick={() => nav('/dashboard')} />
                <Menu active={['/shippingcomps','/shippingcomps/tambah','/shippingcomps/edit'].includes(location.pathname) } icon="Truck" title="Shipping Comps" onClick={() => nav('/shippingcomps')} />
            </div>
            <div className="h-1/2 grid content-end">
                <div className="bg-[#4678f3] h-16 flex justify-center" onClick={logout}>
                    <div className="grid content-center h-full">
                        <div className="flex text-center">
                            <Icon.Logout />
                            <p className="font-medium text-xl text-white ml-2">Log Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer