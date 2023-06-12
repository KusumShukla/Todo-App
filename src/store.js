import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./reducers/tasksSlice";

export const store = configureStore({
  reducer: { tasks: taskSlice },
});
