// 必要なテストユーティリティとコンポーネントをインポート
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { UserSearch } from "./UserSearch";
import userEvent from "@testing-library/user-event";

// ユーザーイベントのセットアップ
const user = userEvent.setup();

// axiosライブラリ全体をモック化
jest.mock('axios');
// モック化されたaxiosのインスタンスを取得
const mockAxios = jest.mocked(axios);

// UserSearchコンポーネントのテストスイートを定義
describe('UserSearch', () => {
    // 各テストケースの前に実行される前処理
    beforeEach(() => {
        // 各テストの前にaxios.getのモックをリセット
        mockAxios.get.mockReset();
    });
    it('入力フォームに入力した内容でAPIリクエストが送信される', async () => {
        // テストで使用するユーザー情報を定義
        const userInfo = {
            id: 1,
            name: "Taro"
        };
        // APIレスポンスのモックを作成
        const res = { data: userInfo }
        // axios.getが成功した場合のレスポンスを設定
        mockAxios.get.mockResolvedValue(res);
        // UserSearchコンポーネントをレンダリング
        render(<UserSearch />);

        // 入力フィールドを取得
        const input = screen.getByRole("textbox");
        // 入力フィールドにユーザー名を入力
        await user.type(input, userInfo.name);

        // 検索ボタンを取得
        const button = screen.getByRole('button');
        // 検索ボタンをクリック
        await user.click(button);

        // axios.getが正しいURLで呼び出されたことを確認
        expect(mockAxios.get).toHaveBeenCalledWith(`/api/users?query=${userInfo.name}`);
    });

    it('APIから取得したユーザー情報が画面に表示される', async () => {
        const userInfo = {
            id: 1,
            name: "Taro"
        };
        const res = { data: userInfo }
        mockAxios.get.mockResolvedValue(res);
        render(<UserSearch />);

        const input = screen.getByRole("textbox");
        await user.type(input, userInfo.name);

        const button = screen.getByRole('button');
        await user.click(button);
        // 非同期的に更新されるUI要素をテスト
        await waitFor(() => expect(screen.getByText(userInfo.name)).toBeInTheDocument());
    });
})