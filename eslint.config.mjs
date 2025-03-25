import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // 특정 파일이나 디렉토리를 무시하는 설정
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.next/**',
      'public/**',
      'app/**',
      // 추가로 무시하고 싶은 파일이나 디렉토리를 여기에 추가하세요
    ],
  },
  {
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
