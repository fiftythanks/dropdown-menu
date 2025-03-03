# Dropdown Menu

This is a simple npm-module that provides just one function: `selectMenuBtnAndMenu(menuBtnUniqueIdentifier, menuUniqueIdentifier)`. To explain how it works, here's an example: say you have a hardcoded dropdown menu _list_ (this must be a list for the module to work correctly) which should open when the user activates a menu button. The menu button and menu itself are assigned CSS classes _.menu-btn_ and _.menu_. To make your unfunctional HTML and CSS menu functional, you just need to call selectMenuBtnAndMenu('.menu-btn', '.menu'). That's all you need.

When the menu is open, click or tap outside the menu closes it.

## Keyboard Support

### Menu Button

| Key                          | Function                                                                                                                                                          |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Down Arrow<br>Space<br>Enter | Opens the menu and moves focus to the first menu item. If the menu is open, Space and Enter close it.                                                             |
| Up Arrow                     | Opens the menu and moves focus to the last menu item.                                                                                                             |
| Tab                          | If the menu is open, in addition to default browser functions, tabbing to an element in the browser window that is not the menu item results in the menu closing. |

### Menu

| Key            | Function                                                                                                                                                        |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Space<br>Enter | Activates the menu item, which is equivalent to activating the link element from which the menu item is made.                                                   |
| Escape         | • Closes the menu.<br>• Sets focus to the menu button.                                                                                                          |
| Up Arrow       | • Moves focus to the previous menu item.<br>• If focus is on the first menu item, moves focus to the last menu item.                                            |
| Down Arrow     | • Moves focus to the next menu item.<br>• If focus is on the last menu item, moves focus to the first menu item.                                                |
| Home           | Moves focus to the first menu item.                                                                                                                             |
| End            | Moves focus to the last menu item.                                                                                                                              |
| A–Z<br>a–z     | • Moves focus to the next menu item with a label that starts with the typed character if such a menu item exists.<br>• Otherwise, focus does not move.          |
| Tab            | In addition to default browser functions, tabbing to an element in the browser window that is not the menu item or the menu button results in the menu closing. |
