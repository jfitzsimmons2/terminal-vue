<script lang="ts" setup>
import { RouteLocationRaw } from "vue-router";
import Navigation from "../../components/navigation/navigation.vue";

function initState() {
  return {
    logoText: "LogoText",
  };
}
</script>

<template>
  <Story title="Typography">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <h1>Level 1 Heading</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </p>
        <h2>Level 2 Heading</h2>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </p>
        <h3>Level 3 Heading</h3>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </p>
        <h4>Level 4 Heading</h4>
        <h5>Level 5 Heading</h5>
        <h6>Level 6 Heading</h6>
      </template>
      <template #controls="{ state }">
        <HstText title="logoText" v-model="state.logoText" />
      </template>
    </Variant>
    <Variant title="inline elements" :init-state="initState">
      <template #default="{ state }">
        <p>
          I am <a href="?abc123">the a tag</a> example<br />
          I am <abbr title="test">the abbr tag</abbr> example<br />
          I am <b>the b tag</b> example<br />
          I am <cite>the cite tag</cite> example<br />
          I am <code>the code tag</code> example<br />
          I am <del>the del tag</del> example<br />
          I am <dfn>the dfn tag</dfn> example<br />
          I am <em>the em tag</em> example<br />
          I am <i>the i tag</i> example<br />
          I am <ins>the ins tag</ins> example<br />
          I am <kbd>the kbd tag</kbd> example<br />
          I am <q>the q tag</q> example<br />
          I am <samp>the samp tag</samp> example<br />
          I am <small>the small tag</small> example<br />
          I am <span>the span tag</span> example<br />
          I am <strong>the strong tag</strong> example<br />
          I am <sub>the sub tag</sub> example<br />
          I am <sup>the sup tag</sup> example<br />
          I am <var>the var tag</var> example<br />
        </p>
      </template>
    </Variant>
  </Story>
</template>
