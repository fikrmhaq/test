

function Input(props) {
        return (
                <div>
                        <label className={`font-semibold text-2xl text-[#808080] ${props.labelclassName} `}>{props.label}</label>
                        <input
                                className={`pl-2 
                                mt-1
text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 
leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-xl 


bg-[#FFFFFF] bg-clip-padding py-4 pr-3 text-gray-700 
transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow w-full border-2 border-[#f1efef] ${props.className}`}
                                {...props}
                                {...props.register} />
                </div>
        )
}

export default Input