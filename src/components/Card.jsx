import GoodButton from './GoodButton';
import BadButton from './BadButton';

export default function Card({ item }) {
    return (
        <li>
            <a href="#">
                <div><img src={item.image} alt={item.title} /></div>
                <div className='cardItemBottom'>
                    <div className='cardItemText'>
                        <p>
                            <span>[{item.category}]</span>
                            <span>{item.author}</span>
                        </p>
                        <p>{item.author}</p>
                    </div>
                    <div className='goodbadBtnArea'>
                        <GoodButton init={item.thumbsUp} />
                        <BadButton init={item.thumbsDown} />
                    </div>
                </div>
            </a>
        </li>
    )
}
