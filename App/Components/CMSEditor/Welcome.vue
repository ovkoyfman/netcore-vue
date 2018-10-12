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
        item.disabled = true;
        //item.removeAttribute("disabled");
        // Array.prototype.forEach.call(item.children, function(item) {
        //   //item.removeAttribute("disabled");
        //   Array.prototype.forEach.call(item.rooms, function(item) {
        //     item.disabled = true;
        //   });
        // });
      });
    }
  }
};
</script>
<style>
</style>