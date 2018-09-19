# Linked List
Single Linked List Data Structure

## Usage 
- Run `npm install`

## Methods
- `append(value)` appends a node to the end of the linked list
- `prepend(value)` prepends a node to the begining of the linked list
- `reverse()` reverses the order of the nodes in the linked list
- `remove(offset)` removes a node from the linked list
- `serialize()` stringifies the linked list 
- `LinkedList.deserialize(serializedList)` creates a new LinkedList from a JSON stringified linked list object
- `insertBefore(value, newVal)` inserts a new Node with value `newVal` before Node with `value`
- `insertAfter(refVal, newVal)` inserts a new Node with value `newVal` after Node with `value`
- `kthFromEnd(k)` returns the value of a node that is located at 'k' places from the end of the list
- `mergeLists` takes in an argument of two lists and merges them with alternating values. It returns the head of the new list. 