import type { SidebarItem } from 'node_modules/@astrojs/starlight/schemas/sidebar';

export const sidebar: SidebarItem[] = [
  { label: '首页', link: '/' },
  { label: '第一个示例', link: '/examples/01-first-example/' },
  { label: '容器', link: '/examples/02-container/' },
  { label: '图形', link: '/examples/03-graphics/' },
  { label: '实战-电视机雪花特效', link: '/examples/extra-tv-noise-sound/' },
].map(item => ({...item, translations: {}, attrs: {}}));
