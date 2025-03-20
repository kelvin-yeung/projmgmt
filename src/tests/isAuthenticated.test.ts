import { isAuthenticated } from "@/lib/isAuthenticated";
import { describe, expect, it } from 'vitest'
import { sum } from "@/lib/isAuthenticated";

describe("#sum", () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
