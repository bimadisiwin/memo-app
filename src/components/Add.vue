<template>
  <div>
    <h2>新規作成</h2>
    <hr />
    <textarea v-model="newMemo"></textarea>
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
