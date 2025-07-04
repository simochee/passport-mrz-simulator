import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
		globals: true,
		coverage: {
			provider: "v8",
			reporter: ["text", "html"],
			exclude: [
				"node_modules/",
				"dist/",
				"build.config.ts",
				"vitest.config.ts",
			],
		},
	},
});
