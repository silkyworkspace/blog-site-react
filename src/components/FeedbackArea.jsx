import { useState } from "react";
import ModalImg from '../assets/images/modalImg.webp';
import CloseBtn from '../assets/images/closeButton.svg';
import FeedBackForm from "./FeedBackForm";

export default function FeedbackArea() {
    // モーダル開閉のuseState
    const [isOpen, setIsOpen] = useState(false);

    // モーダルを開くためのuseState更新関数
    const openModal = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    // モーダルを閉じるためのuseState更新関数
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <h2>We Value Your Feedback</h2>
            <p>We’re gathering feedback from our customers at BAMOS DESIGN.</p>
            <p>Please take a moment to share your thoughts — your input helps us make BAMOS DESIGN even better.</p>
            <button
                className="modalBtn"
                onClick={openModal}
            >
                Feedback
            </button>

            {isOpen && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <div><img src={ModalImg} alt="" /></div>
                        <h3>FEEDBACK</h3>
                        <p>
                            <span>Thank you for visiting BAMOS DESIGN.</span>
                            <span>Please take a moment to complete our</span>
                            <span>survey to help us improve our services.</span>
                        </p>

                        <FeedBackForm />

                        <button
                            className="closeBtn"
                            onClick={closeModal}
                        ><img src={CloseBtn} alt="閉じる" />
                        </button>
                    </div>
                </div>
            )}



        </div>
    );
}

