import bamosList from './bamosList';
import Card from './Card';

export default function CardArea() {
    return (
        <div>
            <ul>
                {bamosList.map((item, index) => (
                    <Card key={index} item={item}/>
                ))}
            </ul>
        </div>
    );
}
