<script setup>
import DefaultTheme from 'vitepress/theme'
import "./custom.css"

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #layout-top>
            <div class="discontinue-notice">
                <div class="inner">
                    The original Hachimi project is no longer under active development.
                    Please use a different mod.
                    <a href="/goodbye">Learn more -></a>
                </div>
            </div>
        </template>
    </Layout>
</template>