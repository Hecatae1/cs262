a.

 1. Object
In todo-item.tsx, i have a todo item represented as an object, e.g.
const remove = (id: string) => setTodos((prev: Todo[]) => prev.filter((t) => t.id !== id));
the above is an object that allows you to set to do items

 2. Anonymous function using arrow notation
In todo-item.tsx : onDayPress={(d: { dateString: string }) => selectDay(d.dateString)}
The above uses a function call to add date to the to do item being made

 3. Asynchronous programming
to fetch data use async storage: not used

 4. Modules
example: import TodoItem from '../components/todo-item';
calls the todo item file in the index.tsx file to be displayed.

 5. TypeScript-specific code
Type annotations and interfaces : const [todos, setTodos] = useState<TodoItemProps[]>([]);

 6. CSS-like specification
In React Native/Expo, i used StyleSheet or inline styles:
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', fontWeight: 700 },
  header: {
    height: 72,
    paddingTop: 28,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'center',
  },
  title: { fontSize: 20, fontWeight: '700' },
});
 from index.tsx

b. Copilot was partially effective. It was able to get the add items and delete on the first prompt. After 3 prompts I was able to get other functionalites like check the task as done or add date and time with a pop up calendar and clock. There was a huge error but it was due to package problems.
