# Stacks and Queues
Stacks and Queues Data Structure

## Usage 
- Run `npm install`

## Stack Methods
- `push` adds a stack to the top of a stack
- `pop` removes the last in node from the top of a stack
- `serialize()` stringifies the stack 
- `stack.deserialize(serializedStack)` creates a new Stack from a JSON stringified stack object

## Queue Methods
- `enqueue` adds a node to the beginning of a queue (first in first out)
- `dequeue` removes the last node in the queueu (first in first out)
- `serialize()` stringifies the queue 
- `queue.deserialize(serializedQueue)` creates a new Queue from a JSON stringified queue object

## Animal Shelter 
- `enqueue` takes a string `cat` or a `dog` and adds it to the queue shelter
- `dequeue` takes a string. If the string is `cat` or `dog` it will return the requested animal if there is one in the queue. If a string is passed in that is not a cat or a dog, it will return the next cat or dog in line. If there are not items in the queue it will through an error. 
