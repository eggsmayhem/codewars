//Add Two Numbers
//
const addTwoNumbers = function(l1, l2) {
    //two LLists, representing two positive Ints. Reverse order.
    //return: sum of two above as a LL
    
   //create a new ist to return with the final solution
    let sum = 0
    let current = new ListNode(0)
    let result = current
    
    while (l1 || l2) {
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        current.next = new ListNode(sum % 10)
        current = current.next
        
        sum = sum > 9 ? 1 : 0
    }
    if(sum) {
        current.next = new ListNode(sum)
    }
    return result.next
    
    
    
    

    
};
