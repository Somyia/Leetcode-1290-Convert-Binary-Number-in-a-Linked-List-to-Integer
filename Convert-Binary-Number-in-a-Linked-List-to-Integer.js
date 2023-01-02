/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    let data=head;
    let now=head;
    let i=-1;
    let sum = 0;
    let value;
    while(data){
        
        i++;
        data=data.next;
    }
    while(now){
       
        value= now.val* Math.pow(2,i);   
        
        sum+=value;
        i--;
        now = now.next;
    }
    return sum;
    
};
