class ListNode{
   public data: number;
   public next: ListNode | null;

   constructor(data: number){
    this.data = data;
    this.next = null;
   }
}

class LinkedList{
    public head: ListNode | null;
    constructor(head){
        this.head = head;
    }
}