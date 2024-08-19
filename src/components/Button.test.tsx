import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("Buttonがレンダリングされる", () => {
    // テスト準備
    render(<Button label="ボタン" onClick={() => alert("クリック")} />);

    //結果の取得
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("ボタン"); // labelの設定確認
  });
});