```js
class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

function insertAtFront(head_ref: Node[], new_data: number): void {
    // 1. Create a new node
    const new_node = new Node(new_data);

    // 2. Make the new node point to the current head
    new_node.next = head_ref[0];

    // 3. Update the head to the new node
    head_ref[0] = new_node;
}

function removeFirstNode(head: Node | null): Node | null {
    if (head == null)
        return null;
 
    // Move the head pointer to the next node
    let temp = head;
    head = head.next;
 
    return head;
}

function printList(node: Node | null): void {
    let current = node;
    while (current !== null) {
        console.log(" " + current.data);
        current = current.next;
    }
    console.log("\n");
}

funodenction main(): void {
    // Start with an empty list
    let head: Node[] = [null]; // Use an array to simulate a pointer to pointer

    // Insert elements at the beginning
    insertAtFront(head, 1);
    insertAtFront(head, 2);
    insertAtFront(head, 3);
    insertAtFront(head, 4);
    insertAtFront(head, 5);
    insertAtFront(head, 6);

    console.log("After inserting Nodes at the front:");
    // The nodes will be: 6 5 4 3 2 1
    printList(head[0]);
 
    head[0] = removeFirstNode(head[0])!;
    
    console.log("After removing first node:");
    // The nodes will be: 5 4 3 2 1
    printList(head[0]);
    
}

main();
