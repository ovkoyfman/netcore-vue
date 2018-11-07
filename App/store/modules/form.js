const state = {
    dataForTheForm: {
        dates:["10-02-2018", "10-03-2018", "10-04-2018", "10-05-2018", "10-06-2018"],
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
      dropClassValue: ""
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
    dropElement: function(state, [incomingParent, incomingChild, destinationParent, destinationChild]){
      let rowToMove = JSON.parse(
        JSON.stringify(
          state.dataForTheForm.components[incomingParent].children[incomingChild]
        )
      );
      state.dataForTheForm.components[incomingParent].children.splice(incomingChild, 1);
      state.dataForTheForm.components[destinationParent].children.splice(
        destinationChild,
        0,
        rowToMove
      );
      if (!state.dataForTheForm.components[incomingParent].children.length) {
        state.dataForTheForm.components.splice(incomingParent, 1);
       }
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