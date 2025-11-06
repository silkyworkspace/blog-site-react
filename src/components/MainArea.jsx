import HeroArea from "./HeroArea";
import BlogArea from "./BlogArea";
import FeedbackArea from "./FeedbackArea";

export default function MainArea() {
    return (
        <main>
            <div className="mainWrapper">
                <HeroArea />
                <BlogArea />
            </div>
            <FeedbackArea />
        </main>
    )
}
