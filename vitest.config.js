import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    globals: true,
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/*'],
      exclude: [
        '**/*.spec.ts',
        '**/*.d.ts',
        'src/lib/**/models/**/*',
        '**/test-utils/**/*',
        'src/plugin/settings.ts'
      ],
      reporter: ['cobertura', 'text', 'text-summary']
    }
  }
});
