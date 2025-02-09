<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">事項</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field
          ref="newItemInput"
          v-model="newItem"
          clearable
          variant="solo-filled"
          label="新增事項"
          :rules="[rules.required, rules.length]"
          append-icon="mdi-plus"
          @click:append="onInputSubmit"
          @keydown.enter="onInputSubmit"
        />
        <v-table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="item.id">
              <td>
                <span v-show="!item.edit">{{ item.name }}</span>
                <v-text-field
                  v-show="item.edit"
                  ref="editItemInput"
                  v-model="item.model"
                  :rules="[rules.required, rules.length]"
                  autofocus
                  @keydown.enter="onEditInputSubmit"
                />
              </td>
              <td>
                <template v-if="!item.edit">
                  <v-btn
                    icon="mdi-pencil"
                    variant="text"
                    color="green"
                    @click="editItem(item.id)"
                  /><v-btn
                    icon="mdi-delete"
                    variant="text"
                    color="red"
                    @click="delItem(item.id)"
                  />
                </template>
                <template v-else>
                  <v-btn
                    icon="mdi-check"
                    variant="text"
                    color="green"
                    @click="onEditInputSubmit(item.id, i)"
                  />
                  <v-btn
                    icon="mdi-undo"
                    variant="text"
                    color="red"
                    @click="cancelEditItem(item.id)"
                  />
                </template>
              </td>
            </tr>
            <tr v-if="items.length === 0">
              <td colspan="2">沒有事項</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center">已完成事項</h1>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in finishedItems" :key="item.id">
              <td>{{ item.name }}</td>
              <td>
                <v-btn
                  icon="mdi-delete"
                  variant="text"
                  color="red"
                  @click="delFinishedItem(item.id)"
                />
              </td>
            </tr>
            <tr v-if="finishedItems.length === 0">
              <td colspan="2">沒有已完成事項</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useListStore } from "@/stores/list";
import { storeToRefs } from "pinia";

const list = useListStore();
const { items, finishedItems } = storeToRefs(list);
const {
  addItem,
  editItem,
  delItem,
  cancelEditItem,
  confirmEditItem,
  delFinishedItem,
} = list;

const newItem = ref("");
const newItemInput = ref(null);
const editItemInput = ref([]);

const onInputSubmit = async () => {
  const validate = await newItemInput.value.validate();
  console.log(validate);
  if (validate.length > 0) return;
  addItem(newItem.value);
  newItemInput.value.reset();
};

const onEditInputSubmit = async (id, i) => {
  const validate = await editItemInput.value[i].validate();
  if (validate.length > 0) return;
  confirmEditItem(id);
};

const rules = {
  required: (value) => {
    return Boolean(value) || "欄位必填";
  },
  length: (value) => {
    return value.length >= 3 || "必須三個字以上";
  },
};
</script>
