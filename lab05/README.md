a. Why couldn’t the original app, as implemented before you made the changes in this exercise, delete any items from the list?<p> it was a prop app and couldn't handle deletion </p><br/>
b. What would you do to update this app to allow users to add a new item and to update an existing item? Just explain what you’d do, without giving any code. <p>just like deleteitem using the same idea I would make an additem and append it to the items array or list</p> <br/>
c. Did the old implementation follow the best practices for URL parameters? <p>Does the new version? the old implementation didn't but the new one does and lets us take out items </p><br/>
d. The deleteItem is wrapped by useCallback. What good does this do? <p>it memoizes the function so its identity stays the same across renders. It prevents unnecessary re-renders in child component </p><br/>
e. Can what you’ve done in this exercise be seen as refactoring the original app? <p>yes</p>
