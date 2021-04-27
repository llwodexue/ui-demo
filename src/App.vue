<template>
  <div id="app">
    <div>
      <l-button>默认按钮</l-button>
      <l-button type="primary">主要按钮</l-button>
      <l-button type="success">成功按钮</l-button>
      <l-button type="info">信息按钮</l-button>
      <l-button type="warning">警告按钮</l-button>
      <l-button type="danger">危险按钮</l-button>
    </div>
    <div>
      <l-button plain>朴素按钮</l-button>
      <l-button plain type="primary">主要按钮</l-button>
      <l-button plain type="success">成功按钮</l-button>
      <l-button plain type="info">信息按钮</l-button>
      <l-button plain type="warning">警告按钮</l-button>
      <l-button plain type="danger">危险按钮</l-button>
    </div>
    <div>
      <l-button mimicry>拟态按钮</l-button>
      <l-button mimicry type="primary">主要按钮</l-button>
      <l-button mimicry type="success">成功按钮</l-button>
      <l-button mimicry type="info">信息按钮</l-button>
      <l-button mimicry type="warning">警告按钮</l-button>
      <l-button mimicry type="danger">危险按钮</l-button>
    </div>
    <div>
      <l-button round>默认按钮</l-button>
      <l-button round type="primary">主要按钮</l-button>
      <l-button round type="success">成功按钮</l-button>
      <l-button round type="info">信息按钮</l-button>
      <l-button round type="warning">警告按钮</l-button>
      <l-button round type="danger">危险按钮</l-button>
    </div>
    <div>
      <l-button circle>1</l-button>
      <l-button circle type="primary">2</l-button>
      <l-button circle type="success">3</l-button>
      <l-button circle type="info">4</l-button>
      <l-button circle type="warning">5</l-button>
      <l-button circle type="danger">6</l-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.l-button {
  margin-right: 20px !important;
  margin-bottom: 20px !important;
}
</style>
