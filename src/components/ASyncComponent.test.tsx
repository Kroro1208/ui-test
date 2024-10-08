import { render, screen, waitFor } from "@testing-library/react"
import AsyncComponent from "./AsyncComponent"
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
describe('AsyncComponents', () => {
    it('ボタンをクリックすると非同期関数が実行される', async () => {
        render(<AsyncComponent />);
        expect(screen.getByText('Initial text')).toBeInTheDocument();

        const button = screen.getByRole('button');
        await user.click(button);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Updated text')).toBeInTheDocument();
        }, {
            interval: 50,
            timeout: 3000 // 2000msかかる非同期処理を待つ
        });
    });
})