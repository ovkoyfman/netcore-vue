<template>
<div id="form-div">
  <form @submit.prevent class="border" :class="dropClass">
    <table>
      <div  v-for="(item, parentIndex) in formData.components"  class="room-block" :class="formData.components[parentIndex].disabled ? '' : 'edit'">
      <tr class="dates" v-if="!parentIndex">
        <td></td>
        <td>Rooms</td>
        <template  v-for="date in formData.dates">
          <td colspan="2">{{date}}</td>
        </template>
        <td></td>
      </tr>
      <tr class="labels"  v-if="!parentIndex">
        <td></td>
        <td></td>
        <template  v-for="date in formData.dates">
          <td  v-for="label in formData.labels">{{label}}</td>
        </template>
          <td></td>
      </tr>
    <tr class="category">
        <td 
        colspan="3">
          <b-input 
          v-model="formData.components[parentIndex].category" 
          :disabled="formData.components[parentIndex].disabled"/>
        </td>
        <td 
        :colspan="formData.template.children[0].room.length*2-1">
          <b-button 
          size="sm" 
          class="remove-category" 
          @click="removeCategory($event)">Remove Category</b-button>
        </td>  
    </tr>
      <draggable
      :element="'tbody'" 
      v-model = formData.components[parentIndex].children
      :options="{handle:'.handleParent', group:'tables'}" 
      :listId="parentIndex" 
      :id="parentIndex" >
        <template  
        v-for="(item, index) in formData.components[parentIndex].children" >
          <tr @contextmenu.prevent="openMenu">
            <td class="handle">
              <span class="handleParent">
                <i class="fas fa-bars"></i>
              </span>
            </td>
            <template v-for="(item, index) in formData.components[parentIndex].children[index].room">
              <b-form-select class="room-type" v-if="!index" v-model="item.selected">            
                <option v-for="option in formData.options" :value="option.text">{{option.text}}</option>
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
      <!-- <component v-for="(item, index) in formData.components" :key="index" :parentIndex="index" :elementIndex="index" :is="item.component" :value="item.value">{{item}}</component> -->
      <b-button size="sm" @click="addCategory">Add Category</b-button>
      <b-button size="sm" @click="submitForm()">Submit</b-button>
    </table>
    </form>
    <div id="action"  v-show="viewMenu" ref="right" :style="{top:top, left:left}"><span><i class="fas fa-bars"></i></span><span><i class="fas fa-bars"></i></span><span><i class="fas fa-bars"></i></span><span><i class="fas fa-bars"></i></span></div>
</div>
</template>
<script>
import Vue from "vue";
import Draggable from "vuedraggable";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {},
      top: '0px',
      viewMenu: false,
      left: '0px',
    };
  },
  computed: {
    formData: function() {
      return this.$store.getters.formData;
    },
    dropClass: function() {
      return this.$store.state.form.dropClassValue;
    }
  },
  methods: {
    addCategory: function() {
      var component = JSON.parse(JSON.stringify(this.formData.template));
      var lengthOfTheCategoryArray = this.formData.components.length;
      this.$store.commit("addCategory", component);
      this.formData.components.push(component);
    },
    setMenu: function(top, offset) {
      let largestHeight = window.innerHeight - this.$refs.right.offsetHeight;
      let left = document.getElementById("form-div").offsetWidth / 2;
      let elementWidth = this.$refs.right.offsetWidth;
      if (top > largestHeight) top = largestHeight;
      this.top = top + window.scrollY - offset + 40 + 'px';
      this.left =  left - elementWidth/2 + 'px';
    },
    closeMenu: function() {
      this.viewMenu = false;
    },
    openMenu: function(e) {
        this.viewMenu = true;
      Vue.nextTick(function() {
        this.$refs.right.focus();
        this.setMenu(e.y, e.offsetY)
      }.bind(this));
      e.preventDefault();
    }
  },
  components: {
    Draggable: Draggable
  }
};
</script>