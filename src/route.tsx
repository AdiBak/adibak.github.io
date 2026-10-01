import React, { createContext, useContext, useEffect, useState } from "react";

export type Route =
  | { name: "home" }
  | { name: "blog" }
  | { name: "post"; slug: string };

const RouteContext = createContext<Route>({ name: "home" });

export function parseRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/blog") return { name: "blog" };
  const match = path.match(/^\/blog\/([^/]+)$/);
  if (match) return { name: "post", slug: decodeURIComponent(match[1]) };
  return { name: "home" };
}

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.pathname));

  useEffect(() => {
    const sync = () => setRoute(parseRoute(window.location.pathname));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  useEffect(() => {
    if (route.name === "home") {
      document.title = "Aditya Bakshi | Machine Learning & AI Engineer";
    } else if (route.name === "blog") {
      document.title = "Blog | Aditya Bakshi";
    }

    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [route]);

  return <RouteContext.Provider value={route}>{children}</RouteContext.Provider>;
}

export function useRoute() {
  return useContext(RouteContext);
}

export function navigate(href: string) {
  const url = new URL(href, window.location.origin);
  const next = `${url.pathname}${url.search}${url.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (next === current) {
    if (url.hash) {
      document.getElementById(url.hash.slice(1))?.scrollIntoView();
    }
    return;
  }

  window.history.pushState({}, "", next);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function onNavigateClick(event: React.MouseEvent<HTMLAnchorElement>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const href = event.currentTarget.getAttribute("href");
  if (!href || href.startsWith("http") || href.startsWith("mailto:")) return;

  event.preventDefault();
  navigate(href);
}
