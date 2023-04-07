/* 
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not.
Example

    For n = 1230, the output should be
    solution(n) = true;
    For n = 239017, the output should be
    solution(n) = false.

    true if n is a lucky ticket number, false otherwise.
*/

function solution(ticket){
    const newTicket = ticket.toString().split('');
    const ticketFirstHalf = newTicket.slice(0, newTicket.length /2);
    const ticketSecondHalf = newTicket.slice( ticketFirstHalf.length ,newTicket.length);

    return ticketFirstHalf.reduce((a,b)=>(+a)+(+b)) ===  ticketSecondHalf.reduce((a,b)=>(+a)+(+b));
}

console.log(solution(239017));