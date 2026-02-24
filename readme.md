# JavaScript DOM & Events 

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

### getElementById()

-   Selects a single element by its **id**.
-   Returns one element object.
-   Fastest method for selecting by id.
-   Example:

``` js
const element = document.getElementById("header");
```

### getElementsByClassName()

-   Selects elements by **class name**.
-   Returns a live HTMLCollection.
-   Updates automatically if the DOM changes.
-   Example:

``` js
const elements = document.getElementsByClassName("box");
```

### querySelector()

-   Selects the **first matching element** using CSS selectors.
-   Returns a single element.
-   Example:

``` js
const element = document.querySelector(".box");
```

### querySelectorAll()

-   Selects **all matching elements** using CSS selectors.
-   Returns a static NodeList.
-   Does NOT update automatically when DOM changes.
-   Example:

``` js
const elements = document.querySelectorAll(".box");
```

------------------------------------------------------------------------

## 2. How to Create and Insert a New Element into the DOM

Steps: 1. Create the element 2. Add content or attributes 3. Append it
to the DOM

Example:

``` js
// Step 1: Create element
const newDiv = document.createElement("div");

// Step 2: Add content
newDiv.textContent = "Hello World!";
newDiv.className = "box";

// Step 3: Insert into DOM
document.body.appendChild(newDiv);
```

Other insertion methods: - append() - prepend() - insertBefore()

------------------------------------------------------------------------

## 3. What is Event Bubbling?

Event Bubbling is a mechanism where an event starts from the **target
element** and bubbles up to its parent elements.

Example:

``` html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

If you click the button: 1. Button event triggers 2. Then the div event
triggers 3. Then the document event triggers

This happens automatically unless stopped.

------------------------------------------------------------------------

## 4. What is Event Delegation? Why is it Useful?

Event Delegation is a technique where you attach a single event listener
to a parent element instead of multiple child elements.

It works because of **event bubbling**.

Example:

``` js
document.getElementById("parent").addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        console.log("Button clicked!");
    }
});
```

Why it is useful: - Improves performance (fewer event listeners) - Works
for dynamically added elements - Cleaner and more maintainable code

------------------------------------------------------------------------

## 5. Difference between `preventDefault()` and `stopPropagation()`

### preventDefault()

-   Prevents the browser's default behavior.
-   Example: Prevent form submission or link navigation.

``` js
event.preventDefault();
```

### stopPropagation()

-   Stops the event from bubbling up (or capturing down).
-   Prevents parent handlers from running.

``` js
event.stopPropagation();
```

### Key Difference:

-   `preventDefault()` stops default browser action.
-   `stopPropagation()` stops event movement in the DOM.
