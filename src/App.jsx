import CounterViews from "./app/featured/counter/CounterViews";
import PostsView from "./app/featured/posts/PostsView";

function App() {
  return (
    <>
      <div className="text-center space-y-10 mt-12">
        <h2>Counter App</h2>
        <CounterViews />
        <PostsView />
      </div>
    </>
  );
}

export default App;
