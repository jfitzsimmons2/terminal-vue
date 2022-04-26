<script lang="ts" setup>
function initState() {
  return {};
}
</script>

<template>
  <Story title="Navigation lists">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Members</a></li>
            <li><a href="#">Settings</a></li>
            <li>
              <a href="#">Profile</a>
              <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Billing</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </template>
      <template #controls="{ state }">
        <HstText title="logoText" v-model="state.logoText" />
      </template>
    </Variant>
  </Story>
</template>
