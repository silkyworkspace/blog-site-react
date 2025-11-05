import { useState } from "react";
import GoodBtn from '../assets/images/thumb-up.svg';
import GoodBtnActive from '../assets/images/thumb-up-active.svg'

export default function GoodButton() {
    const [count, setCount] = useState(0);
    const [liked, setliked] = useState(false);

    const handleClick = () => {
        setliked(!liked);
        setCount(liked ? count - 1 : count + 1);
    };

    return (
        <button onClick={handleClick} className={`likeBtn ${liked ? "liked" : ""}`}>
            <label>
                <div>
                    {!liked && (<img src={GoodBtn} alt="いいねボタン" />)}
                    {liked && (<img src={GoodBtnActive} alt="クリック済みいいねボタン" />)}
                </div>
                <span>{count}</span>
            </label>
        </button>

    )
}
