import { radioList } from './radioList'
import { checkboxList } from './checkboxList'
import { useState } from 'react';
import SubmitButton from './submitButton';

export default function FeedBackForm() {
    const [form, setForm] = useState({
        age: "0-10",
        opportunity: "",
        interests: [],
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prevForm) => {
            // チェックボックス（interests）専用の処理
            if (type === "checkbox") {
                let newInterests = [...form.interests];

                if (checked) {
                    // チェックされたら追加
                    newInterests.push(value);
                } else {
                    // 外されたら削除
                    newInterests = newInterests.filter((v) => v !== value);
                }

                return { ...form, interests: newInterests };
            }

            // それ以外（ラジオ・セレクト・テキストなど）
            return { ...prevForm, [name]: value };
        });
    };

    const show = () => {
        // JSオブジェクトをJSON文字列に変換
        console.log(JSON.stringify(form, null, 2));
    };

    return (
        <form className='modalForm'>
            {/* ラジオボタン */}
            <div>
                <p>Age</p>
                <div className='radioContent'>
                    {radioList.map((age, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="age"
                                value={age}
                                checked={form.age === age}
                                onChange={handleChange} />
                            <span>{age}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* セレクトボックス */}
            <div>
                <p>How did you hear about BAMOS DESIGN?</p>
                <select
                    name="opportunity"
                    id="opportunity"
                    value={form.opportunity}
                    onChange={handleChange}>
                    <option value="" disabled> -- 1つ選択してください -- </option>
                    <option value="websites">Webサイト</option>
                    <option value="acquaintance">知人</option>
                    <option value="others">その他</option>
                </select>
            </div>

            {/* チェックボックス */}
            <div>
                <p>What is your favorite field or area of interest?</p>

                <div className='checkboxContent'>
                    {checkboxList.map((item, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                name={item.value}
                                value={item.value}
                                checked={form.interests.includes(item.value)}
                                onChange={handleChange} />
                            <span>{item.label}</span>
                        </label>
                    ))
                    }
                </div>
            </div>

            {/* テキストエリア */}
            <div>
                <label>
                    <p>What kind of special features or topics would you like to read on BAMOS DESIGN in the future?</p>
                    <textarea
                        name="comment"
                        value={form.comment}
                        placeholder="ここに記入してください"
                        onChange={handleChange}>
                    </textarea>
                </label>
            </div>

            <SubmitButton show={show} />

            {/* <button type="button" onClick={show}>
                SUBMIT
            </button> */}

        </form>
    );
}
