import { lazy } from "react";
import type { ErrorRouteComponent } from "@tanstack/react-router";

function A({ error, reset }: { error: Error; reset: () => void }) {
  return null;
}

export const useA: ErrorRouteComponent = A;

const B = Object.assign(
  function B({ error, reset }: { error: Error; reset: () => void }) {
    return null;
  },
  { preload: () => Promise.resolve() },
);

export const useB: ErrorRouteComponent = B;

export const useC: ErrorRouteComponent = lazy(() =>
  Promise.resolve({ default: A }),
);
