import { describe, expect, it } from "vitest";

describe("public entry point", () => {
  it("can be imported as an ESM module", async () => {
    const module = await import("../../src/index.js");

    expect(module).toBeDefined();
  });
});
