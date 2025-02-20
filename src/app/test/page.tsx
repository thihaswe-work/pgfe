export default function Page() {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    // Add a node to the end of the list
    append(val) {
      const newNode = new ListNode(val);
      if (this.head === null) {
        this.head = newNode; // First node in the list
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }

    // Log the entire list
    log() {
      let current = this.head;
      while (current !== null) {
        console.log(current.val);
        current = current.next;
      }
    }
  }

  // Create a LinkedList and add some nodes
  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(15);

  // Log the linked list
  list.log(); // Output: 5 10 15\
  console.log(list.head);
  const node1 = new ListNode(1);
  const node2 = new ListNode(12, node1);
  const node3 = new ListNode(13, node2);
  console.log(node3);
  return <div></div>;
}
