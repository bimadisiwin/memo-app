<template>
  <div class="button">
    <h3>新規作成</h3>
    <textarea rows="4" cols="35" v-model="newMemo"></textarea>
    <button @click="addMemo">追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMemo: "",
    };
  },
  methods: {
    addMemo() {
      // 親コンポーネントのイベントを発火させる（第二引数に渡したいデータをおく：オブジェクトは参照渡し）
      this.$emit("add-click", this.newMemo);
    },
  },
};
</script>
