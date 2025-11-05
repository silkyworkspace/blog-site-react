import BadButton from './BadButton';
import bamosList from './bamosList';
import GoodButton from './GoodButton';


export default function CardArea() {
    return (
        <div>
            <ul>
                {bamosList.map((item, index) => (
                    <li key={index}>
                        <a href="#">
                            <div><img src={item.image} alt={item.title} /></div>
                            <p>
                                <span>{item.category}</span>
                                <span>{item.author}</span>
                            </p>
                            <p>{item.author}</p>
                            <GoodButton />
                            <BadButton />
                        </a>
                    </li>
                ))}
                <li></li>
            </ul>

        </div>
    );
}
