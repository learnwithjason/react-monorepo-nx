// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PageHeader } from "@lwj/shared-components";

export function App() {
  return (
    <>
      <PageHeader siteTitle="Learn With Jason">
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </PageHeader>
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
