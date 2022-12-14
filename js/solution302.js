//LC 206
//
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;

    //  //null check
    // if (head === null) return null;
    // if (head.next === null) return head;

    // const flip = reverseList(head.next);
    // let temp = flip;
    // //traverse the list
    // while (temp.next !== null) {
    //     temp = temp.next;
    // }
    // //set head as last
   
    // head.next = null
    // temp.next = head
    // return flip
};
