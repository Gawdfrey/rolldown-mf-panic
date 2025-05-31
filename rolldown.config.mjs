import { defineConfig } from "rolldown";
import { moduleFederationPlugin } from "rolldown/experimental";

export default defineConfig({
  input: "./button.tsx",
  plugins: [
    moduleFederationPlugin({
      name: "vite_rolldown",
      filename: "remote-entry.js",
      exposes: {
        "./button": "./button.tsx",
      },
      shared: {
        react: {
          version: "19.1.0",
        },
      },
      manifest: true,
      getPublicPath: "http://localhost:8085/",
    }),
  ],
});
