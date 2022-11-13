<script lang="ts" setup>
import Card from "../../components/card/card.vue";

function initState() {
  return {
    headerAlign: "center",
    collapsable: false
  };
}
</script>

<template>
  <Story title="Lists">
    <Variant title="li" :init-state="initState">
      <template #default="{ state }">

        <ul>
          <li>This is a list item</li>
          <li>So is this - there could be more</li>
          <li>
            Make sure to style list items to:
            <ul>
              <li>Not forgetting child list items</li>
              <li>Not forgetting child list items</li>
              <li>Not forgetting child list items</li>
              <li>Not forgetting child list items</li>
            </ul>
          </li>
          <li>A couple more</li>
          <li>Top-level list items</li>
        </ul>
      </template>
    </Variant>
    <Variant title="ol" :init-state="initState">
      <template #default="{ state }">

        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>
            Aliquam tincidunt mauris eu risus
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>
          </li>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>
      </template>
    </Variant>
    <Variant title="description lists" :init-state="initState">
      <template #default="{ state }">


        <dl>
          <dt>Description list title 01</dt>
          <dd>Description list description 01</dd>
          <dt>Description list title 02</dt>
          <dd>Description list description 02</dd>
          <dd>Description list description 03</dd>
        </dl>
      </template>
    </Variant>
    <Variant title="table of contents" :init-state="initState">
      <template #default="{ state }">

        <p>A <strong>Table of content</strong>, which can be used as an index for a blog archive.</p>
        <p>Unlike regular lists, the TOC component <em>only supports a single depth level.</em></p>
        <ol class="terminal-toc">
          <li><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></li>
          <li><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></li>
          <li><a href="#">Aliquam tincidunt mauris eu risus.</a></li>
          <li><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></li>
          <li><a href="#">Aliquam tincidunt mauris eu risus.</a></li>
        </ol>

      </template>
      <template #controls="{ state }">
        <HstCheckbox title="collapsable" v-model="state.collapsable" />
      </template>
    </Variant>
  </Story>
</template>
