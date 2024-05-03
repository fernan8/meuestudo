var MeuNode = /** @class */ (function () {
    function MeuNode(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return MeuNode;
}());
function insertAtFront(head_ref, new_data) {
    var new_node = new MeuNode(new_data);
    new_node.next = head_ref[0];
    head_ref[0] = new_node;
}
function removeFistNode(head) {
    if (head == null)
        return null;
    var temp = head;
    head = head.next;
    return head;
}
function printList(node) {
    var current = node;
    if (node === null) {
        console.log("a lista esta vazia");
        return;
    }
    while (current !== null) {
        console.log(" " + current.next);
        current = current.next;
    }
    console.log("\n");
}
function main() {
    var head = [];
    insertAtFront(head, 1);
    insertAtFront(head, 2);
    insertAtFront(head, 3);
    insertAtFront(head, 3);
    insertAtFront(head, 4);
    insertAtFront(head, 5);
    insertAtFront(head, 6);
    insertAtFront(head, 7);
    console.log("after removing first node");
    printList(head[0]);
    head[0] = removeFistNode(head[0]);
    console.log("depois de remover");
    printList(head[0]);
}
main();
