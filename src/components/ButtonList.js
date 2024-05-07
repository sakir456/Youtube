import { useState } from "react";
import Button from "./Button";

const ButtonList = () => {

    const [clickedButton, setClickedButton] = useState(null)

    const checkClickedButton = (name) => {
        setClickedButton(name)
    } 
    const buttonNames = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "News", "javascript", "IPL", "Music", "Mixes", "FootBall", "Punjab", "USA", ];

    return(
        <div className="flex"> 
            {buttonNames.map((name, index) => (
                <Button key={index} 
                name={name} 
                onClick={() => checkClickedButton(name)}
                clickedButton={clickedButton}
                />
            ))}
        </div>
    );
}

export default ButtonList;
