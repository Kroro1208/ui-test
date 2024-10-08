import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  it("increment と decrement が正しく機能する", () => {
    const { result } = renderHook(() => useCounter(1));

    expect(result.current.count).toBe(1);

    act(() => result.current.increment());
    expect(result.current.count).toBe(2);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(1);
  });
});