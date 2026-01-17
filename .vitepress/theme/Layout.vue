<script setup>
import DefaultTheme from 'vitepress/theme'
import "./custom.css"
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()

const notices = {
  'en': {
    text: 'The original Hachimi project is no longer under active development. Please use a different mod.',
    link: '/goodbye',
    linkText: 'Learn more ->'
  },
  'zh-cn': {
    text: '原始 Hachimi 项目不再处于活跃开发状态。请使用其他插件。',
    link: '/zh-cn/goodbye',
    linkText: '了解更多 ->'
  },
}

const getLanguage = (path) => {
  const match = path.match(/^\/([a-z]{2}(?:-[a-z]{2})?)\//)
  return match ? match[1] : 'en'
}

const currentLanguage = computed(() => getLanguage(route.path))
const notice = computed(() => notices[currentLanguage.value] || notices['en'])
</script>

<template>
    <Layout>
        <template #layout-top>
            <div class="discontinue-notice">
                <div class="inner">
                    {{ notice.text }}
                    <a :href="notice.link">{{ notice.linkText }}</a>
                </div>
            </div>
        </template>
    </Layout>
</template>