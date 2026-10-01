import React from "react";
import {
  Main,
  Education,
  Timeline,
  Project,
  Navigation,
  Footer,
  Blog,
  BlogPost,
} from "./components";
import { RouteProvider, useRoute } from "./route";
import './index.scss';

function Site() {
    const route = useRoute();

    return (
    <div className="main-container">
        <Navigation />
        <main>
            {route.name === "home" && (
              <>
                <Main/>
                <Education/>
                <Timeline/>
                <Project/>
              </>
            )}
            {route.name === "blog" && <Blog />}
            {route.name === "post" && <BlogPost slug={route.slug} />}
        </main>
        <Footer />
    </div>
    );
}

function App() {
    return (
      <RouteProvider>
        <Site />
      </RouteProvider>
    );
}

export default App;
