<template>
  <div>
    <h2>メモ詳細</h2>
    <hr />
    <textarea v-model="memos[id]"></textarea>
    <button @click="updateMemo">編集</button>
    <button @click="removeMemo">削除</button>
  </div>
</template>

<script>
export default {
  props: ["id", "memos"],
  methods: {
    // 親コンポーネントのイベントを発火させる（第二引数以降に渡したいデータをおく：オブジェクトは参照渡し）
    updateMemo() {
      this.$emit("update-click", this.id, this.memos[this.id]);
    },
    removeMemo() {
      this.$emit("remove-click", this.id);
    },
  },
};
</script>
