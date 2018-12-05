<template>
  <button class="button"
          :style="style"
          @click="selected">
    <div class="frame">
      <span class="label">{{label}}</span>
      <span class="odd"
            v-if="odd">
        {{oddFormat}}
      </span>
    </div>
    <div class="change"
         :class="[this.change]"></div>
  </button>
</template>

<script>
import { isNil, isNumber } from 'lodash';

export default {
  name: 'OutcomeButton',
  data() {
    return {
      previousOdd: null,
    };
  },
  props: {
    id: {
      type: String,
      default: null,
      required: true,
    },
    label: {
      type: String,
      default: 'Label',
    },
    odd: {
      type: Number,
      default: null,
    },
    width: {
      type: [String, Number, null],
      default: null,
    },
    fontSize: {
      type: [String, Number, null],
      default: 1.00,
    },
  },
  computed: {
    style() {
      return {
        fontSize: isNumber(this.fontSize) ? `${this.fontSize}em` : this.fontSize,
        width: isNumber(this.width) ? `${this.width}px` : this.width,
      };
    },
    change() {
      if (this.previousOdd === this.odd || isNil(this.previousOdd)) return null;
      return this.previousOdd < this.odd ? 'up' : 'down';
    },
    oddFormat() {
      return this.odd.toFixed(2);
    },
  },
  watch: {
    odd(value, previousValue) {
      this.previousOdd = previousValue;
      this.odd = value;
    },
  },
  methods: {
    selected() {
      this.$emit('selected', {
        id: this.id,
        label: this.label,
        odd: this.odd,
        previousOdd: this.previousOdd,
      });
    },
  },
};
</script>

<style scoped>
.button {
  position: relative;
  padding: 0 1em;
  background: #2e2e2e;
  color: #eee;
  border: none;
  font-size: 1em;
  outline: none;
  cursor: pointer;
  overflow: hidden;
}

.button:hover {
  background: #222;
}

.frame {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.label {
  padding: 1em;
  text-align: left;
}

.odd {
  padding: 1em;
  text-align: right;
}

.change {
  display: none;
  position: absolute;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
}

.up {
  display: block;
  top: 0;
  border-width: 0 1em 1em 0;
  border-color: transparent green transparent transparent;
}

.down {
  display: block;
  bottom: 0;
  border-width: 0 0 1em 1em;
  border-color: transparent transparent red transparent;
}
</style>
