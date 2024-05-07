

const Button = ({name, onClick, clickedButton}) => {
    
 
    
    
    return(
        <div>
            <button className={`px-4 py-1 m-2  rounded-lg hover:bg-gray-300 font-medium text-sm
             ${clickedButton === name ? "bg-gray-950 text-white hover:bg-gray-950" : "bg-gray-200" }`} onClick={onClick} >{name}</button>
        </div>
    )
}

export default Button;