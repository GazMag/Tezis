<template>
  <article class="px-4 py-6 elevation-1">
    <header class="mb-4">
      <h2 class="text-h2 font-weight-thin">{{ title }}</h2>
    </header>
    <section>
      <slot />
    </section>
  </article>
</template>

<script setup>
  defineProps({
    title: String,
    backgroundColor: String,
    color: String,
  })
</script>

<style scoped>
  :deep(p) {
    font-weight: 300;
  }
  :deep(ul) {
    list-style-type: "➤ ";
    list-style-position: inside;
  }
  :deep(.text-inherit) {
    color: inherit;
  }
  :deep(a) {
    text-decoration-color: color-mix(in srgb, currentColor 50%, transparent);
    text-decoration-thickness: 1px;
    text-underline-position: under;
    transition: text-decoration-color 0.2s ease-in-out;
    &:hover, &:active, &:focus {
      text-decoration-color: currentColor;
    }
  }
  article {
    --bg: v-bind(backgroundColor);
    --bg-dark: color-mix(in srgb, var(--bg) 75%, black);
    background: linear-gradient(to right, var(--bg-dark), var(--bg), var(--bg-dark));
    color: v-bind(color);
    > header, > section {
      margin-inline: auto;
      max-width: 60ch;
    }
  }
  h2 {
    opacity: 0.5;
  }
</style>
