/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    include: ['./src/tests/unit/**/*.{test,spec}.{js,ts}'],
  },
});
