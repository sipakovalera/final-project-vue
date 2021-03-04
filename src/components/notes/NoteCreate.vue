<template>
  <div class="note-create">
    <form @submit.prevent="addNote(noteTitle, noteDescribe, noteRole)">
      <div>
        <input type="text" v-model="noteTitle" />
        <label>Title</label>
      </div>
      <div>
        <input type="text" v-model="noteDescribe" />
        <label>Description</label>
      </div>
      <div>
        <select name="role" v-model="noteRole">
          <option disabled value="">Choose correct category</option>
          <option value="Important">Important</option>
          <option value="Irrelevant">Irrelevant</option>
        </select>
        <label>Category</label>
      </div>
      <button type="submit">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "user-create",
  data() {
    return {
      noteTitle: "",
      noteDescribe: "",
      noteRole: ["Important", "Irrelevant"]
    };
  },
  methods: {
    ...mapActions("notes", ["noteCreate"]),
    addNote() {
      this.noteCreate({
        title: this.noteTitle,
        describe: this.noteDescribe,
        role: this.noteRole
      });
      this.resetForm();
    },
    resetForm() {
      this.noteTitle = "";
      this.noteDescribe = "";
      this.noteRole = "";
    }
  }
};
</script>

<style scoped>
.note-create {
  margin: 100px 0;
}
form {
  padding: 80px;
  border: 2px solid #b1ada1;
  border-radius: 5px;
  background-color: #f3e7c7;
}
input,
select {
  margin: 5px;
  padding: 3px;
  max-width: 250px;
  border-radius: 5px;
  border: 2px solid #b1ada1;
}
button {
  padding: 4px 20px;
  width: 180px;
  border-radius: 5px;
  border: 2px solid #b1ada1;
  background-color: #e7e1d0;
  margin: 10px 5px;
  cursor: pointer;
}
button:hover{
  opacity: .7;
}
</style>
