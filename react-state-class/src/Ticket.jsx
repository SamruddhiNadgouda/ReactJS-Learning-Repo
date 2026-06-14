import TicketNum from './TicketNum';
import "./Lottery.css";

export default function Ticket({ ticket }){
    return (
        <div className='ticket'>
            <h3>Ticket</h3>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}