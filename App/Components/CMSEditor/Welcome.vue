<template>
  <div @click="transformToNotEditable">
    <div class="header-image">
      <h2>Hotel Origami Proposal</h2>
    </div>   
    <page-content></page-content>
    <form-block></form-block>
  </div>
</template>
<script>
window.dataForTheForm = {
  template: {
    component: "room-block",
    category: "Type Category Name",
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
            fieldName: "RoomType",
            disabled: true
          },
          {
            date: "10-02-2018"
          },
          {
            label: "Rate",
            component: "input-element",
            fieldType: "text",
            fieldValue: "0",
            fieldName: "0",
            disabled: true
          },
          {
            label: "Qty",
            component: "input-element",
            fieldType: "text",
            fieldValue: "0",
            fieldName: "0",
            disabled: true
          },
          {
            date: "10-03-2018"
          },
          {
            label: "Rate",
            component: "input-element",
            fieldType: "text",
            fieldValue: "0",
            fieldName: "0",
            disabled: true
          },
          {
            label: "Qty",
            component: "input-element",
            fieldType: "text",
            fieldValue: "0",
            fieldName: "0",
            disabled: true
          }
        ]
      }
    ]
  },
  components: [
    {
      component: "room-block",
      category: "Type Category Name",
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
              fieldName: "RoomType",
              disabled: true
            },
            {
              date: "10-02-2018"
            },
            {
              label: "Rate",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              label: "Qty",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              date: "10-03-2018"
            },
            {
              label: "Rate",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              label: "Qty",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
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
              fieldName: "RoomType",
              disabled: true
            },
            {
              date: "10-02-2018"
            },
            {
              label: "Rate",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              label: "Qty",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              date: "10-03-2018"
            },
            {
              label: "Rate",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              label: "Qty",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            }
          ]
        }
      ]
    },
    {
      component: "room-block",
      category: "Type Category Name",
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
              fieldName: "RoomType",
              disabled: true
            },
            {
              date: "10-02-2018"
            },
            {
              label: "Rate",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              label: "Qty",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              date: "10-03-2018"
            },
            {
              label: "Rate",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              label: "Qty",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
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
              fieldName: "RoomType",
              disabled: true
            },
            {
              date: "10-02-2018"
            },
            {
              label: "Rate",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              label: "Qty",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              date: "10-03-2018"
            },
            {
              label: "Rate",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            },
            {
              label: "Qty",
              component: "input-element",
              fieldType: "text",
              fieldValue: "0",
              fieldName: "0",
              disabled: true
            }
          ]
        }
      ]
    }
  ]
};
//import pageHeader from "../Main/Header.vue";
import content from "./Content.vue";
import FormBlock from "../Form/FormBlock.vue";
export default {
  data: function() {
    return {
      formData: dataForTheForm
    };
  },
  components: {
    //pageHeader: pageHeader,
    pageContent: content,
    FormBlock: FormBlock
  },
  methods: {
    transformToNotEditable: function() {
      Array.prototype.forEach.call(this.formData.components, function(item) {
        //item.removeAttribute("disabled");
        Array.prototype.forEach.call(item.children, function(item) {
          //item.removeAttribute("disabled");
          Array.prototype.forEach.call(item.rooms, function(item) {
            item.disabled = true;
          });
        });
      });
    }
  }
};
</script>
<style>
</style>