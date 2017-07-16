<template lang="html">
  <div class="box">
    <p>
        <slot></slot>
    </p>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.box{
  background-color: gray;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 1em;
}
</style>
