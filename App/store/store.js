import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dropClassValue: "",
    dataForTheForm: {
      template: {
        component: "room-block",
        category: "Type Category Name",
        disabled: true,
        children: [
          {
            rooms: [
              {
                label: "Room Type",
                component: "select-element",
                options: [
                  { text: "Single" },
                  { text: "Double" },
                  { text: "Master" }
                ],
                fieldName: "RoomType"
              },
              {
                date: "10-02-2018"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                date: "10-03-2018"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                date: "10-04-2018"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                date: "10-05-2018"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              }
            ]
          }
        ]
      },
      components: [
        {
          component: "room-block",
          category: "Type Category Name",
          disabled: true,
          children: [
            {
              rooms: [
                {
                  label: "Room Type",
                  component: "select-element",
                  options: [
                    { text: "Single" },
                    { text: "Double" },
                    { text: "Master" }
                  ],
                  fieldName: "RoomType"
                },
                {
                  date: "10-02-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-03-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-04-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-05-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                }
              ]
            },
            {
              rooms: [
                {
                  label: "Room Type",
                  component: "select-element",
                  options: [
                    { text: "Single" },
                    { text: "Double" },
                    { text: "Master" }
                  ],
                  fieldName: "RoomType"
                },
                {
                  date: "10-02-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-03-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-04-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-05-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                }
              ]
            }
          ]
        },
        {
          component: "room-block",
          category: "Type Category Name",
          disabled: true,
          children: [
            {
              rooms: [
                {
                  label: "Room Type",
                  component: "select-element",
                  options: [
                    { text: "Single" },
                    { text: "Double" },
                    { text: "Master" }
                  ],
                  fieldName: "RoomType"
                },
                {
                  date: "10-02-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-03-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-04-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-05-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                }
              ]
            },
            {
              rooms: [
                {
                  label: "Room Type",
                  component: "select-element",
                  options: [
                    { text: "Single" },
                    { text: "Double" },
                    { text: "Master" }
                  ],
                  fieldName: "RoomType"
                },
                {
                  date: "10-02-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-03-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-04-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-05-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mutations: {
    outlineDropFieldsOnTheForm: function(state, value) {
      state.dropClassValue = value;
    },
    transformToNotEditable: function(state) {
      console.log(state.dataForTheForm.components);
      Array.prototype.forEach.call(state.dataForTheForm.components, function(
        item
      ) {
        item.disabled = true;
      });
    }
  }
});
