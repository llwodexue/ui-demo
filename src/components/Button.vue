<template>
  <button
    class="l-button"
    :class="[
      `l-button--${type}`,
      { 'is-plain': plain, 'is-round': round, 'is-circle': circle, 'is-mimicry': mimicry }
    ]"
  >
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value =>
        ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(value)
    },
    plain: {
      type: Boolean,
      default: false
    },
    mimicry: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
$default-color: #fff;
$default-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #67c23a;
$success-active-color: #85ce61;
$warning-color: #e6a23c;
$warning-active-color: #ebb563;
$danger-color: #f56c6c;
$danger-active-color: #f78989;

.l-button {
  font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: $default-color;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
// hover样式
.l-button--default {
  &:hover,
  &:focus {
    color: $default-active-color;
    border-color: $default-active-color;
    background: #ecf5ff;
  }
}
.l-button--primary {
  color: #fff;
  background: $primary-color;
  border-color: $primary-color;
  &:hover,
  &:focus {
    background: $primary-active-color;
    border-color: $primary-active-color;
    color: #fff;
  }
}
.l-button--success {
  color: #fff;
  background: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    border-color: $success-active-color;
    color: #fff;
  }
}
.l-button--info {
  color: #fff;
  background: $info-color;
  border-color: $info-color;
  &:hover,
  &:focus {
    background: $info-active-color;
    border-color: $info-active-color;
    color: #fff;
  }
}
.l-button--warning {
  color: #fff;
  background: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    border-color: $warning-active-color;
    color: #fff;
  }
}
.l-button--danger {
  color: #fff;
  background: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    border-color: $danger-active-color;
    color: #fff;
  }
}
// plain样式
.l-button--default.is-plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: $default-color;
    border-color: $default-active-color;
    color: $default-active-color;
  }
}
.l-button--primary.is-plain {
  box-shadow: unset;
  color: $primary-color;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: $primary-color;
    border-color: $primary-color;
    color: #fff;
  }
}
.l-button--success.is-plain {
  box-shadow: unset;
  color: $success-color;
  background: #f0f9eb;
  &:hover,
  &:focus {
    background: $success-color;
    border-color: $success-color;
    color: #fff;
  }
}
.l-button--info.is-plain {
  box-shadow: unset;
  color: $info-color;
  background: #f4f4f5;
  &:hover,
  &:focus {
    background: $info-color;
    border-color: $info-color;
    color: #fff;
  }
}
.l-button--warning.is-plain {
  box-shadow: unset;
  color: $warning-color;
  background: #fdf6ec;
  &:hover,
  &:focus {
    background: $warning-color;
    border-color: $warning-color;
    color: #fff;
  }
}
.l-button--danger.is-plain {
  box-shadow: unset;
  color: $danger-color;
  background: #fef0f0;
  &:hover,
  &:focus {
    background: $danger-color;
    border-color: $danger-color;
    color: #fff;
  }
}
// mimicry样式
.l-button.is-mimicry {
  box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
}
.l-button--primary.is-mimicry {
  box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
}
.l-button--info.is-mimicry {
  box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
}
.l-button--success.is-mimicry {
  box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
}
.l-button--warning.is-mimicry {
  box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
}
.l-button--danger.is-mimicry {
  box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
}
// round样式
.l-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle样式
.l-button.is-circle {
  border-radius: 50%;
  padding: 12px;
  width: 40px;
  height: 40px;
}
</style>
