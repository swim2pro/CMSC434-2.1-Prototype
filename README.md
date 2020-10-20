# CMSC434-2.1-Prototype
HTML Prototype for Smart Fridge Project

**Development Platform:** 
HTML, CSS, and Javascript. We chose this platform because web technology is very easy to develop with. You can separate your UI structure (HTML) from styling (CSS) and logic (JavaScript). You also don't need to compile each time you want to see a change, whereas in Android you must rerun Gradle every time. CSS is also the most flexible styling language we know, and it is much more powerful than Android XML files.

*By the end of Phase 2, we will complete the following smart-fridge prototype elements (horizontal and vertical) [vertical elements listed in sublists below horizontal elements]:*
- Edit shopping/grocery list [Horizontal]
  - Touch plus icon under “shopping list” section to enter a new item
    - Touch “get later” button to signify that this item is not a priority on the shopping/grocery list
  - Touch minus icon under “shopping list” section to remove a previously entered item
  - Touch “Save” button when done
  - Implement these tasks both for smart-fridge and phone app
- Add item to smart-fridge database [Horizontal]
  - Touch “Quick Add” button
  - Type in item name
  - Enter item owner (owner distinction is helpful when multiple users use the same fridge)
  - Enter time to expiration for item
  - Touch “Save” button when done
  - Added items are automatically removed from the database when the expiration date arrives
  - Show deletion of an item consumed before expiration
- View items stored in smart-fridge database [Horizontal]
  - Touch “Fridge Content” button
  - Touch “Sort By” and choose either “Expiration Date” or “Recently Added”
  - Look at resulting table displayed
  - Be able to toggle back and forth between the two
- View expiring items [Horizontal]
  - Look under “Expiration Manager” section to see a list of soon expiring items (as stored in the smart-fridge database)
  - Touch “More” button under “Expiration Manager” section to see more expiring items
