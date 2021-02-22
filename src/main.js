import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "tailwindcss/tailwind.css";
import VueTailwind from "vue-tailwind";

import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  // TCard,
  // TAlert,
  // TModal,
  // TDropdown,
  // TRichSelect,
  // TPagination,
  // TTag,
  // TRadioGroup,
  // TCheckboxGroup,
  TTable,
  TDatepicker
  // TToggle,
  // TDialog,
} from "vue-tailwind/dist/components";

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  "t-input": {
    component: TInput,
    props: {
      classes: "border-2 block w-full rounded text-gray-800"
      // ...More settings
    }
  },
  "t-input-group": {
    component: TInputGroup,
    props: {
      fixedClasses: {
        wrapper: "",
        label: "block",
        body: "",
        feedback: " text-sm text-sm",
        description: "text-gray-400 text-sm"
      },
      classes: {
        wrapper: "",
        label: "",
        body: "",
        feedback: "text-gray-400",
        description: "text-gray-400"
      },
      variants: {
        danger: {
          label: "text-red-500",
          feedback: "text-red-500"
        },
        success: {
          label: "text-green-500",
          feedback: "text-green-500"
        }
      }
    }
  },
  "t-select": {
    component: TSelect,
    props: {
      classes: "border-2 blockw-full roundedtext-gray-800"
    }
  },
  "t-checkbox": {
    component: TCheckbox,
    props: {
      fixedClasses:
        "transition duration-100 ease-in-out rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed",
      classes: "text-blue-500 border-gray-300 ",
      variants: {
        error: "text-red-500 border-red-300",
        success: "text-green-500 border-green-300"
      }
    }
  },
  "t-radio": {
    component: TRadio,
    props: {
      fixedClasses:
        "transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed",
      classes: "text-blue-500 border-gray-300",
      variants: {
        error: "text-red-500 border-red-300",
        success: "text-green-500 border-green-300"
      }
    }
  },
  "t-table": {
    component: TTable,
    props: {
      classes: {
        table:
          "min-w-full divide-y divide-gray-100 shadow-sm border-gray-200 border",
        thead: "",
        theadTr: "",
        theadTh: "px-3 py-2 font-semibold text-left bg-gray-100 border-b",
        tbody: "bg-white divide-y divide-gray-100",
        tr: "",
        td: "px-3 py-2 whitespace-no-wrap",
        tfoot: "",
        tfootTr: "",
        tfootTd: ""
      },
      variants: {
        thin: {
          td: "p-1 whitespace-no-wrap text-sm",
          theadTh: "p-1 font-semibold text-left bg-gray-100 border-b text-sm"
        }
      }
    }
  },
  "t-textarea": {
    component: TTextarea,
    props: {
      classes: "border-2 block w-full rounded text-gray-800"
      // ...More settings
    }
  },
  "t-button": {
    component: TButton,
    props: {
      fixedClasses:
        "block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600",
      variants: {
        secondary:
          "text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600",
        error:
          "text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600",
        success:
          "text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600",
        link: "text-blue-500 underline hover:text-blue-600"
      }
    }
  },
  "t-datepicker": {
    component: TDatepicker,
    props: {
      fixedClasses: {
        navigator: "flex",
        navigatorViewButton: "flex items-center",
        navigatorViewButtonIcon: "flex-shrink-0 h-5 w-5",
        navigatorViewButtonBackIcon: "flex-shrink-0 h-5 w-5",
        navigatorLabel: "flex items-center py-1",
        navigatorPrevButtonIcon: "h-6 w-6 inline-flex",
        navigatorNextButtonIcon: "h-6 w-6 inline-flex",
        inputWrapper: "relative",
        viewGroup: "inline-flex flex-wrap",
        view: "w-64",
        calendarDaysWrapper: "grid grid-cols-7",
        calendarHeaderWrapper: "grid grid-cols-7",
        monthWrapper: "grid grid-cols-4",
        yearWrapper: "grid grid-cols-4",
        input:
          "block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
        clearButton:
          "flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6",
        clearButtonIcon: "fill-current h-3 w-3"
      },
      classes: {
        wrapper: "flex flex-col",
        dropdownWrapper: "relative z-10",
        dropdown:
          "origin-top-left absolute rounded shadow bg-white overflow-hidden mt-1",
        enterClass: "",
        enterActiveClass:
          "transition ease-out duration-100 transform opacity-0 scale-95",
        enterToClass: "transform opacity-100 scale-100",
        leaveClass: "transition ease-in transform opacity-100 scale-100",
        leaveActiveClass: "",
        leaveToClass: "transform opacity-0 scale-95 duration-75",
        inlineWrapper: "",
        inlineViews: "rounded bg-white border mt-1 inline-flex",
        inputWrapper: "",
        input: "text-black placeholder-gray-400 border-gray-300",
        clearButton:
          "hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600",
        clearButtonIcon: "",
        viewGroup: "",
        view: "",
        navigator: "pt-2 px-3",
        navigatorViewButton:
          "transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100",
        navigatorViewButtonIcon: "fill-current text-gray-400",
        navigatorViewButtonBackIcon: "fill-current text-gray-400",
        navigatorViewButtonMonth: "text-gray-700 font-semibold",
        navigatorViewButtonYear: "text-gray-500 ml-1",
        navigatorViewButtonYearRange: "text-gray-500 ml-1",
        navigatorLabel: "py-1",
        navigatorLabelMonth: "text-gray-700 font-semibold",
        navigatorLabelYear: "text-gray-500 ml-1",
        navigatorPrevButton:
          "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed",
        navigatorNextButton:
          "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed",
        navigatorPrevButtonIcon: "text-gray-400",
        navigatorNextButtonIcon: "text-gray-400",
        calendarWrapper: "px-3 pt-2",
        calendarHeaderWrapper: "",
        calendarHeaderWeekDay:
          "uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center",
        calendarDaysWrapper: "",
        calendarDaysDayWrapper: "w-full h-8 flex flex-shrink-0 items-center",
        otherMonthDay:
          "text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed",
        emptyDay: "",
        inRangeFirstDay:
          "text-sm bg-blue-500 text-white w-full h-8 rounded-l-full",
        inRangeLastDay:
          "text-sm bg-blue-500 text-white w-full h-8 rounded-r-full",
        inRangeDay:
          "text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed",
        selectedDay:
          "text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed",
        activeDay:
          "text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed",
        highlightedDay:
          "text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed",
        day:
          "text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed",
        today:
          "text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500",
        monthWrapper: "px-3 pt-2",
        selectedMonth:
          "text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white",
        activeMonth: "text-sm rounded w-full h-12 mx-auto bg-blue-100",
        month: "text-sm rounded w-full h-12 mx-auto hover:bg-blue-100",
        yearWrapper: "px-3 pt-2",
        year: "text-sm rounded w-full h-12 mx-auto hover:bg-blue-100",
        selectedYear:
          "text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white",
        activeYear: "text-sm rounded w-full h-12 mx-auto bg-blue-100"
      },
      variants: {
        danger: {
          input: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
          clearButton: "hover:bg-red-200 text-red-500"
        }
      }
    }
  }
  // ...Rest of the components
};

Vue.use(VueTailwind, settings);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
