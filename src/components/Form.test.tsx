// React Testing Libraryから必要な関数をインポート
import { render, screen } from "@testing-library/react";
// ユーザーイベントをシミュレートするためのライブラリをインポート
import userEvent from "@testing-library/user-event";
import Form from "./Form";

// userEventのセットアップ。これにより、ユーザーアクションをシミュレートできる
const user = userEvent.setup();

describe('Form', () => {
    it('初期状態ではinput要素は空欄', () => {
        render(<Form />);
        // input要素を取得
        const input = screen.getByPlaceholderText('Enter text');
        // input要素が存在することを確認
        expect(input).toBeInTheDocument();
        // input要素の値が空であることを確認
        expect(input).toHaveValue("");
    });

    it('入力したテキストがsubmitされる', async () => {
        // window.alert関数をモック化。テスト中のalert呼び出しを追跡できるようにする
        const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
        render(<Form />);
        const input = screen.getByPlaceholderText('Enter text');
        // "Test text"というテキストを入力。非同期操作なのでawaitを使用
        await user.type(input, "Test text");
        // 入力されたテキストが表示されていることを確認
        expect(screen.getByDisplayValue('Test text')).toBeInTheDocument();
        // submitボタンを取得
        const button = screen.getByRole("button");
        // ボタンをクリック。非同期操作なのでawaitを使用
        await user.click(button);
        // alertが正しい引数で呼び出されたことを確認
        expect(alertSpy).toHaveBeenCalledWith("submitted: Test text");
        // モックをリストア（元の状態に戻す）
        alertSpy.mockRestore();
    });
})