import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../common";

const useLogged = () => {
    const userData = useSelector(state => state.userData)
    let location = useLocation();
    let nav = useNavigate();
    const [log, setLog] = useState(false)

    useEffect(() => {
        let is_log = routes.find(x => location.pathname === "/" + x.path).log
        if (userData.set) {
            if (!is_log) nav('/dashboard')
        } else {
            if (is_log) nav('/')
        }
        setLog(is_log)
    }, [location.pathname])

    return log
}

export default useLogged