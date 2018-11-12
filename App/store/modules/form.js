const state = {
    dataForTheForm: {
        dates:[],
        labels:["Qty","Rate"],
        options: [ 
          { text: "Select One" },
          { text: "Single" },
          { text: "Double" },
          { text: "Master" }
        ],
        template: {
          component: "room-block",
          category: "Type Category Name",
          disabled: true,
          totalValue: 0,
          children: [
            {
              room: [
                {
                  selected: "Select One",
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
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
          totalValue: 0,
          children: [
            {
              room: [
                {
                  selected: "Select One",
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
                }
              ]
            },
            {
              room: [
                {
                  selected: "Select One",
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
                },
                {
                  Rate: "0",
                  Qty: "0"
                }
              ]
            }
          ]
            },
            {
              component: "room-block",
              category: "Type Category Name",
              disabled: true,
              totalValue: 0,
              children: [
                {
                  room: [
                    {
                      selected: "Select One",
                    },
                    {
                      Rate: "0",
                      Qty: "0"
                    },
                    {
                      Rate: "0",
                      Qty: "0"
                    },
                    {
                      Rate: "0",
                      Qty: "0"
                    },
                    {
                      Rate: "0",
                      Qty: "0"
                    }
                  ]
                }
              ]
          }
        ]
      },
      dropClassValue: "",
      tempQty: "0",
      tempRate: "0",
      viewMenu: false
};
const getters = {
  formData: state => {
    return state.dataForTheForm;
  }
}
const mutations =  {
    outlineDropFieldsOnTheForm: function(state, value) {
      state.dropClassValue = value;
    },
    transformToNotEditable: function(state) {
      Array.prototype.forEach.call(state.dataForTheForm.components, function(
        item
      ) {
        item.disabled = true;
      });
    },
    transformToEditable: function(state, parentIndex) {
      if(state.dataForTheForm.components[parentIndex]) state.dataForTheForm.components[parentIndex].disabled = false;
    },
    addCategory: function(state, component){
      state.dataForTheForm.components.push(component);
    },
    removeCategory: function(state, index){
      state.dataForTheForm.components.splice(index, 1);
    },
    addRow: function(state, [index, parentIndex, roomsObject]){
      state.dataForTheForm.components[parentIndex].children.splice(index+1,0,roomsObject);
    },
     removeRow: function(state,[parentIndex, index]) {
      state.dataForTheForm.components[parentIndex].children.splice(index, 1);
     },
     clearData: function(state,[parentIndex, index]) {
      state.dataForTheForm.components[parentIndex].children[index].room.forEach(function(room){
        room.Qty = "0";
        room.Rate = "0";
      })
     },
     copyData: function(state,[parentIndex, index]) {
      state.dataForTheForm.components[parentIndex].children[index].room.forEach(function(room,index){
        if(index == 1){
          state.tempQty = room.Qty;
          state.tempRate =room.Rate;
        }
        else if(index){
          room.Qty = state.tempQty;
          room.Rate = state.tempRate;
        }
      })
     },
    saveForm: function(state, parentIndex){
      state.dataForTheForm.components[parentIndex].disabled = true;
    }
  };

export default{
    state,
    getters,
    mutations
};