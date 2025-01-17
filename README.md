# CMSC434-2.1-Prototype
HTML Prototype for Smart Fridge Project

**Development Platform:**
HTML, CSS, and Javascript. We chose this platform because web technology is very easy to develop with. You can separate your UI structure (HTML) from styling (CSS) and logic (JavaScript). You also don't need to compile each time you want to see a change, whereas in Android you must rerun Gradle every time. CSS is also the most flexible styling language we know, and it is much more powerful than Android XML files.

## Features/todo:
*By the end of Phase 2, we will complete the following smart-fridge prototype elements (horizontal and vertical) [vertical elements listed in sublists below horizontal elements]:*
- Edit shopping/grocery list [Horizontal]
  - [x] Touch plus icon under “shopping list” section to enter a new item
  - [x] Touch minus icon under “shopping list” section to remove a previously entered item
- Add item to smart-fridge database [Horizontal]
  - [x] Touch “Add” button
  - [x] Type in item name
  - [x] Enter item owner (owner distinction is helpful when multiple users use the same fridge)
  - [x] Enter time to expiration for item
  - [x] Touch “Confirm” button when done
  - [x] Added items are marked when the expiration date arrives
  - ~~[ ] Show deletion of an item consumed before expiration~~
- View items stored in smart-fridge database [Horizontal]
  - [x] Touch “Contents” button
  - [x] Touch arrows to sort by “Owner”, “Item”, or either “Expiration Date”
  - [x] Look at resulting table displayed
- View expiring items [Horizontal]
  - [x] Look under “Expiration Manager” section to see a list of soon expiring items (as stored in the smart-fridge database)
  - ~~[ ] Touch “More” button under “Expiration Manager” section to see more expiring items~~
- Style
 - [x] Use CSS variables for coloring [Benard]
 - [x] Change color scheme to blues and blacks (darker, cooler colors) [Benard]
 - [x] Highlight selected tab on navbar [Benard or Alex]
 - [x] Homogenize different views [Alex]
