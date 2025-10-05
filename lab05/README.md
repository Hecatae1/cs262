a. Why couldn’t the original app, as implemented before you made the changes in this exercise, delete any items from the list? it was a prop app and couldn't handle deletion
b. What would you do to update this app to allow users to add a new item and to update an existing item? Just explain what you’d do, without giving any code. just like deleteitem using the same idea i would make an additem and append it to the items array or list
c. Did the old implementation follow the best practices for URL parameters? Does the new version? the old implementation didn't but the new one does and lets us take out items
d. The deleteItem is wrapped by useCallback. What good does this do? it memoizes the function so its identity stays the same across renders. It prevents unnecessary re-renders in child component
e. Can what you’ve done in this exercise be seen as refactoring the original app? yes
