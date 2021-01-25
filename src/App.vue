<template>
  <div id="app">
    <div class="left-column">
      <ul>
        <li v-for="(memo, id) in displayTitle" :key="memo.id">
          <router-link :to="/memos/ + id">{{ memo }}</router-link>
        </li>
      </ul>
    </div>
    <!-- コンポーネント内で使われるカスタムイベントを呼び出す -->
    <div class="right-column">
      <router-view
        class="button"
        @add-click="createMemo"
        @update-click="updateMemo"
        @remove-click="removeMemo"
        :memos="memos"
      ></router-view>
    </div>
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

<style scoped>
#app {
  padding: 30px 40px;
  border: 1px solid #aaa;
  height: 600px;
  width: 500px;
}
.left-column {
  float: left;
  width: 50%;
  padding-top: 10px;
}
.right-column {
  float: right;
  width: 50%;
  margin: 0px;
}
.button {
  padding-top: 20px;
}
</style>
