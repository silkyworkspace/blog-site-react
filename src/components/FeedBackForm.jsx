import { useState } from "react"

export default function FeedBackForm() {

    // ラジオボタンuseState
    const [selectedAge, setSelectedAge] = useState({
        age: "0-10",
    });

    // セレクトボックスuseState
    const [selectedChance, setSelectedChance] = useState({
        chance: "",
    });

    // チェックボックスuseState
    const [selectedInterests, setSelectedInterests] = useState({
        interests: [],
    })

    // テキストエリアuseState
    const [textArea, setTextArea] = useState({
        comment: "",
    })

    // ラジオボタンuseState更新関数
    const handleAgeChange = (e) => {
        setSelectedAge({
            ...selectedAge,
            [e.target.name]: e.target.value
        });
    };

    // セレクトボックスuseState更新関数
    const handleChanceChange = (e) => {
        setSelectedChance({
            ...selectedChance,
            [e.target.name]: e.target.value
        });
    }

    // チェックボックスuseState更新関数
    const handleInterestsChange = (e) => {
        const { value, checked } = e.target;

        setSelectedInterests((prev) => {
            const newInterests = checked
                ? [...prev.interests, value]// 追加
                : prev.interests.filter((item) => item !== value);// 削除
            return { interests: newInterests };
        });
    };

    // テキストエリアuseState更新関数
    const handleTextAreaChandge = (e) => {
        setTextArea({
            ...textArea,
            [e.target.name]: e.target.value
        });
    }

    // 送信処理
    const show = () => {
        console.log(
            `age: ${selectedAge.age}
            chance: ${selectedChance.chance}
            interests: ${selectedInterests.interests}
            comment: ${textArea.comment}`
        );
    }


    return (
        <form action="">
            {/* ラジオボタン */}
            <div>
                <p>Age</p>
                {["0-10", "10-20", "20-30", "30-40", "40-50"].map((age) => (
                    <label key={age}>
                        <input
                            type="radio"
                            name="age"
                            value={age}
                            checked={selectedAge.age === age}
                            onChange={handleAgeChange}
                        />
                        <span>{age}</span>
                    </label>
                ))}
            </div>

            {/* セレクトボックス */}
            <div>
                <p>How did you hear about BAMOS DESIGN?</p>
                <select
                    name="chance"
                    id="chance"
                    value={selectedChance.chance}
                    onChange={handleChanceChange}
                >
                    <option value="" disabled>1つ選択してください</option>
                    <option value="websites">Webサイト</option>
                    <option value="acquaintance">知人</option>
                    <option value="others">その他</option>
                </select>
            </div>

            {/* チェックボックス */}
            <div>
                <p>What is your favorite field or area of interest?</p>
                <label>
                    <input
                        type="checkbox"
                        name="music"
                        value="music"
                        checked={selectedInterests.interests.includes("music")}
                        onChange={handleInterestsChange}
                    />
                    <span>音楽</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="art"
                        value="art"
                        checked={selectedInterests.interests.includes("art")}
                        onChange={handleInterestsChange}
                    />
                    <span>芸術</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="design"
                        value="design"
                        checked={selectedInterests.interests.includes("design")}
                        onChange={handleInterestsChange}
                    />
                    <span>デザイン</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="program"
                        value="program"
                        checked={selectedInterests.interests.includes("program")}
                        onChange={handleInterestsChange}
                    />
                    <span>プログラミング</span>
                </label>
            </div>

            {/* テキストエリア */}
            <div>
                <label>
                    <p>What kind of special features or topics would you like to read on BAMOS DESIGN in the future?</p>
                    <textarea
                        name="comment"
                        placeholder="ここに記入してください"
                        value={textArea.comment}
                        onChange={handleTextAreaChandge}
                    ></textarea>
                </label>
            </div>

            <button type="button" onClick={show}>
                SUBMIT
            </button>
        </form>
    )
}
