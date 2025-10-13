# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Application documentation

This small Expo/React Native app renders a list of items from a local JSON data file (`app/data/items.json`) copied from the lab05 project.

One-sentence answers to how the code uses specific constructs:

- Promises: The Fetch API (used previously) returns Promises to handle asynchronous HTTP requests and responses; the original code used Promises via async/await to fetch and parse JSON.
- JSON: The items are stored in `app/data/items.json` as JSON and imported into `app/app.tsx` where they become a JavaScript array of objects used for rendering.
- Hooks: React Hooks like `useState` and `useEffect` are used in the app to manage component state and to run side effects such as data loading when the component mounts.
- HTTP methods: When the app fetches data from a server it would use HTTP methods such as GET to request the JSON resource; in the current local-import setup no network HTTP request is made.

How to run locally:

```powershell
cd "c:\Users\Aisha Naomi A\cs262_local\cs262\lab06\fetch-app"
npm install
npx expo start
```

If you want to switch back to remote fetching, replace the local import in `app/app.tsx` with a `fetch(url)` call inside `useEffect` and parse the result with `response.json()`.
