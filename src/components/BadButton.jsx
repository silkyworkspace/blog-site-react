import { useState } from "react";
import BadBtn from '../assets/images/thumb-down.svg';
import BadBtnActive from '../assets/images/thumb-down-active.svg'

export default function BadButton({init}) {
    const [count, setCount] = useState(init);
    const [disliked, setdisliked] = useState(false);

    const handleClick = () => {
        setdisliked(!disliked);
        setCount(disliked ? count - 1 : count + 1);
    };

    return (
        <button onClick={handleClick} className={`disLikeBtn ${disliked ? "disliked" : ""}`}>
            <label>
                <div>
                    {!disliked && (<img src={BadBtn} alt="バッドボタン" />)}
                    {disliked && (<img src={BadBtnActive} alt="クリック済みバッドボタン" />)}
                </div>
                <span>{count}</span>
            </label>
        </button>
    );
}
