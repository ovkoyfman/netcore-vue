<template>
  <div  class="room-block" :class="globalData.components[parentIndex].disabled ? '' : 'edit'">
      <tr class="dates" v-if="!parentIndex">
        <td></td>
        <td>Rooms</td>
        <template  v-for="date in globalData.dates">
          <td colspan="2">{{date}}</td>
        </template>
        <td></td>
      </tr>
      <tr class="labels"  v-if="!parentIndex">
        <td></td>
        <td></td>
        <template  v-for="date in globalData.dates">
          <td  v-for="label in globalData.labels">{{label}}</td>
        </template>
          <td></td>
      </tr>
    <tr class="category">
        <td 
        colspan="3">
          <b-input 
          v-model="globalData.components[parentIndex].category" 
          :disabled="globalData.components[parentIndex].disabled"/>
        </td>
        <td 
        :colspan="globalData.template.children[0].room.length*2-1">
          <b-button 
          size="sm" 
          class="remove-category" 
          @click="removeCategory($event)">Remove Category</b-button>
        </td>  
    </tr>
      <draggable
      :element="'tbody'" 
      v-model = globalData.components[parentIndex].children
      :options="{handle:'.handleParent', group:'tables'}" 
      :listId="parentIndex" 
      :id="parentIndex" >
        <template  
        v-for="(item, index) in globalData.components[parentIndex].children" >
          <tr @contextmenu.prevent="setMenu">
            <td class="handle">
              <span class="handleParent">
                <i class="fas fa-bars"></i>
              </span>
            </td>
            <template v-for="(item, index) in globalData.components[parentIndex].children[index].room">
              <b-form-select class="room-type" v-if="!index" v-model="item.selected">            
                <option v-for="option in globalData.options" :value="option.text">{{option.text}}</option>
              </b-form-select>
              <td v-if="index" class="price-qty" :key="'td' + index">
                <span v-if="item.Rate" class="dollar-sign">$</span>
                <b-form-input  v-model="item.Rate | currency"/>
              </td>
             <td v-if="index" class="price-qty"  :key="'1td' + index">
                <b-form-input  v-model="item.Qty"/>
              </td>
               
            </template>
            <td>
                <b-button size="sm" @click="removeRow(index)">Remove</b-button>
            </td>
          </tr>
        </template>
        <tr><td>&nbsp;</td></tr>
      </draggable>
    <!-- <tr class="form-bottom">
        <td colspan="2"><b-button size="sm" @click="addRow">Add Row</b-button></td><td :colspan="(globalData.template.children[0].room.length*2)"><b-button size="sm" @click="saveForm($event,parentIndex)">Save</b-button></td>
    </tr> -->
  </div>
</template>
<script>
import Draggable from "vuedraggable";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {},
      top: '0px',
      left: '0px',
      vm: vm
    };
  },
  
  methods: {
    // addRow: function() {
    //   var room = JSON.parse(
    //     JSON.stringify(this.globalData.template.children[0].room)
    //   );
    //   var roomsObject = new Object({ room });
    //   this.$store.commit("addRow", [ this.parentIndex, roomsObject]);
    // },
     removeRow: function(index) {
      this.$store.commit("removeRow",[this.parentIndex, index]);
    },
    setViewMenu: function(index) {
      this.$store.commit("setViewMenu",value);
    },
    removeCategory: function(e) {
      e.preventDefault;
      e.stopPropagation;
      this.$store.commit("removeCategory", this.parentIndex);
    },
    setMenu: function(top, left) {
      console.log(this.$refs);
            // largestHeight = window.innerHeight - this.vm.$refs.right.offsetHeight - 25;
            // largestWidth = window.innerWidth - this.vm.$refs.right.offsetWidth - 25;
            // elementWidth = this.vm.$refs.right.offsetWidth;
            // if (top > largestHeight) top = largestHeight;

            // if (left > largestWidth) left = largestWidth;

            // this.top = top + 30 + 'px';
            // this.left = left - elementWidth/2 + 'px';
      },
      closeMenu: function() {
        setViewMenu(false);
      },
      openMenu: function(e) {
         setViewMenu(true);
        Vue.nextTick(function() {
          console.log(this);
          this.$refs.right.focus();
          this.setMenu(e.y, e.x)
        }.bind(this));
        e.preventDefault();
      },
      showSubMenu: function(index){
      //at the moment adding row below clicked row
      var room = JSON.parse(
        JSON.stringify(this.globalData.template.children[0].room)
      );
      var roomsObject = new Object({ room });
      this.$store.commit("addRow", [ index,this.parentIndex, roomsObject]);
    }
    // countNigtsForTheDate: function(thisIndex, parentIndex) {
    //   var count = 0;
    //   this.globalData.components[parentIndex].children.forEach(element => {
    //     count += parseInt(element.rooms[thisIndex].fieldValue);
    //     console.log(element);
    //     console.log(thisIndex);
    //   });
    //   return count;
    // },
    // updateTotalNights(childIndex, index) {
    //   let totalRoomsForTheDate = 0;
    //   this.globalData.components[this.parentIndex].children.forEach(element => {
    //     totalRoomsForTheDate += parseInt(element.rooms[childIndex]);
    //   });
    //   //this.globalData.components[grandParentIndex].children[parentIndex].rooms[index];
    // }
  },
  computed: {
    globalData: function() {
      return this.$store.getters.formData;
    },
    viewMenu: function() {
      return this.$store.state.viewMenu;
    },
    // totalRoomNights: function() {
    //   let rooms = 0;
    //   this.globalData.components.forEach(element => {
    //     element.children.forEach(element => {
    //       element.rooms.forEach(element => {
    //         if (element.label == "Qty" && parseInt(element.fieldValue) > 0) {
    //           rooms += parseInt(element.fieldValue);
    //         }
    //       });
    //     });
    //   });
    //   return rooms;
    // }
  },
  components: {
    Draggable
  },
  props: ["elementIndex", "parentIndex"]
};
</script>