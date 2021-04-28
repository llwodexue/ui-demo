<template>
  <div class="app-container">
    <div class="app-left">
      <router-link
        v-for="(item, i) in routesList"
        :key="i"
        :to="{ name: item.name }"
        class="a-link"
        >{{ item.meta.title }}</router-link
      >
    </div>
    <div class="app-right">
      <router-view />
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes.js'
export default {
  data() {
    return {
      routesList: []
    }
  },
  created() {
    const list = []
    routes.forEach(item => {
      if (item.children) {
        list.push(item.children.reduce(child => child.meta.type === 2))
      }
    })
    this.$nextTick(() => {
      this.routesList = list
    })
    console.log(list)
  },
  methods: {}
}
</script>
<style lang="scss">
.app-container {
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  .app-left {
    width: 230px;
  }
  .app-right {
    flex: 1 1 auto;
  }
  .a-link {
    text-decoration: none;
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
  }
}
</style>
