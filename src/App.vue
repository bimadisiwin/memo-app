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
    };
  },
  computed: {
    displayTitle() {
      return this.memos.map((value) => value.split("\n")[0]);
    },
  },
  // mounted:DOMが作成された直後の状態
  mounted() {
    if (localStorage.getItem("memos")) {
      try {
        this.memos = JSON.parse(localStorage.getItem("memos"));
      } catch (e) {
        localStorage.removeItem("memos");
      }
    }
  },
  //
  watch: {
    memos: {
      handler() {
        const parsed = JSON.stringify(this.memos);
        localStorage.setItem("memos", parsed);
      },
      deep: true,
    },
  },
  methods: {
    // メモの追加
    createMemo(value) {
      if (!value) {
        return;
      } else {
        this.memos.push(value);
        this.$router.push("/");
      }
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

