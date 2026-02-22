1.Question:
    getElementById(). Use for select a element by its unique id
    getElementsByClassName(). use for select a element by its specific class name
    querySelector(). use for select the first matching element using css selector
  querySelectorAll(). use for select ALL matching element using css selector

2.Question:
    for create element: creating element using document.createElement("div"). and insert to their parent element using appendChild()
    
3. Question:
     Event bubbling is an event starts from the target element and then propagates through its parent element(inluding the way of root)
      <div id="parent">
      <button id="child">Read More</button>
      </div>
    how its works: event trigger in child, then propagate to parent then body then html.

4.Question:
Event delegation is a technique where we use in parent element instead of adding separate event to multiple child.
  why it's useful:
     1.less need event listener
     2. less memory use
     3. if any need to add new element using js,we don't need to add any new event
     4. less repetation of code

5.Question:
   preventDefault()-> it's stop the defalut browser's action of an event.
   stopPropagation()-> it's stop event bubbing to parent element.
