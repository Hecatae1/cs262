How does the code use the following constructs?
Promises - it uses await/async:fetch('url') returns a promise,  awaits a response before it parsing the file/url. replacing github.com with raw.githubusercontent.com i was able to get the items.json file

JSON - The app calls response.json() to parse the JSON payload into JavaScript objects that are rendered in the list.
Hooks - React Hooks are used: useEffect triggers the fetch when the component mounts and useState stores the data, loading, and error state for rendering.
HTTP methods - the code uses http get method by calling fetch (url)  then breaks down the data in the file

Modify the URL to some invalid value and explain how the app responds. it throws a type error:network request failed
