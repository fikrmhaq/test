import { Icon } from "../icon"

function Menu(props) {
    let IconComponent = Icon[props.icon]
    return (
        <div className=" h-16 px-8 border-b-2" onClick={props.onClick}>
            <div className="grid content-center h-full">
                <div className="flex">
                    <IconComponent {...(props.active ? {color:'#4678f3'} : {})}/>
                    <p className={`font-normal text-xl ${props.active ? 'text-[#4678f3]' : 'text-[#828282]'} ml-3 grid content-center`}>{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Menu