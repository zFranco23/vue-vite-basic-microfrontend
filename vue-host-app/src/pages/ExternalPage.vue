<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const RemoteButton = defineAsyncComponent(
  // @ts-ignore
  () => import("buttonRemote/components/RemoteButton")
  )

</script>
<template>
  <div>
      <h1>Welcome to External page</h1>
      <p>This page is consuming an external microfrontend</p>

      
      <RemoteButton />

  </div>
</template>







<style>

</style>