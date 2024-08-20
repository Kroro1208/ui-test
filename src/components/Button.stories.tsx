import Button from "./Button";
// Storybookの型定義をインポート
import type { Meta, StoryObj } from '@storybook/react';

// コンポーネントのメタデータを定義
const meta = {
    title: 'Button', // Storybook上でのコンポーネントの表示名
    component: Button, // 対象のコンポーネント
    argTypes: {
        label: {
            options: ["Primary Button", "Normal Button"],
            control: { type: "select" }
        }
    }
} as Meta<typeof Button>; // MetaをButtonコンポーネントの型で制約

// メタデータをデフォルトエクスポート（Storybookがこれを使用）
export default meta;

// Buttonコンポーネントのストーリーの型を定義
type Story = StoryObj<typeof Button>;

// Primaryボタンのストーリーを定義
export const Primary: Story = {
    args: { // コンポーネントに渡すprops
        label: "Primary Button", // ボタンのラベル
        primary: true, // プライマリースタイルを適用
    }
};

// Normalボタンのストーリーを定義
export const Normal: Story = {
    args: { // コンポーネントに渡すprops
        label: "Normal Button", // ボタンのラベル
        primary: false, // 通常のスタイルを適用
    }
};