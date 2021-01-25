<template>
  <div id="app">
    <h1>メモアプリ</h1>
    <ul>
      <li v-for="(memo, id) in displayTitle" :key="memo.id">
        <router-link :to="/memos/ + id">{{ memo }}</router-link>
      </li>
    </ul>
    <!-- コンポーネント内で使われるカスタムイベントを呼び出す -->
    <router-view
      @add-click="createMemo"
      @update-click="updateMemo"
      @remove-click="removeMemo"
      :memos="memos"
    ></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memos: [],
      memo: "",
    };
  },
  created: function () {
    this.$store.dispatch("memos/init");
  },
  computed: {
    displayTitle() {
      return this.memos.map((value) => value.split("\n")[0]);
    },
  },
  methods: {
    // メモの追加
    createMemo() {
      this.$store.dispatch("memos/add", this.memo);
    },
    // メモの更新
    updateMemo(id, value) {
      if (!value) {
        return;
      } else {
        this.memos.splice(id, 1, value);
        this.$router.push("/");
      }
    },
    // メモの削除
    removeMemo(id) {
      this.memos.splice(id, 1);
      this.$router.push("/");
    },
  },
};
</script>

