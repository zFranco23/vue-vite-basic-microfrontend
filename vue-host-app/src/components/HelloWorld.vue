<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import ErrorFallbackVue from './ErrorFallback.vue'
import LoadingVue from './Loading.vue'

defineProps<{ msg: string }>()

const RemoteButton = defineAsyncComponent({
  // @ts-ignore
  loader: () => import("buttonRemote/components/RemoteButton"),

  // A component to use while the async component is loading
  loadingComponent: LoadingVue,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,

  // A component to use if the load fails
  errorComponent: ErrorFallbackVue,

  timeout: 3000
})

</script>

<template>
  <div>
    This is the host app using the remote button

    <RemoteButton />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
