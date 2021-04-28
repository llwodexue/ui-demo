<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.h-style {
  font-weight: 400;
  color: #1f2f3d;
  margin: 0;
}
.l-hover {
  box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
}
.container {
  width: 870px;
  h2 {
    font-size: 28px;
    @extend .h-style;
  }
  h3 {
    font-size: 22px;
    @extend .h-style;
  }
  .h-des {
    font-size: 14px;
    color: #5e6d82;
    margin: 14px 0;
  }
}
.btn-list {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 24px;
  transition: 0.2s;
  .l-button {
    margin-right: 20px !important;
    margin-bottom: 20px !important;
  }
  &:hover {
    @extend .l-hover;
  }
}
</style>
