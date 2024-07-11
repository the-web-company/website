export default defineAppConfig({
  ui: {
    primary: "rose",
    gray: "purple",
    notifications: {
      position: "top-0 bottom-auto", // Show toasts at the top right of the screen
      rounded: "rounded-md",
    },
    input: {
      color: {
        white: {
          outline: "bg-purple-800 text-purple-400 ring-1 ring-inset ring-purple-700 focus:ring-2 focus:ring-purple-400",
        },
        //     gray: {
        //       outline:
        //         "bg-purple-50 dark:bg-purple-800 text-purple-900 dark:text-white ring-1 ring-inset ring-purple-300 dark:ring-purple-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        //     },
        //   },
        //   variant: {
        //     outline:
        //       "bg-transparent text-purple-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
        //     none: "bg-transparent focus:ring-0 focus:shadow-none",
        //   },
        //   default: {
        //     size: "md",
        //   },
      },
      // textarea: {
      //   color: {
      //     white: {
      //       outline:
      //         "bg-purple-50 dark:bg-purple-900 text-purple-900 dark:text-white ring-1 ring-inset ring-purple-300 dark:ring-purple-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
      //     },
      //   },
      //   variant: {
      //     outline:
      //       "transparent text-purple-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
      //   },
    },
    button: {
      default: {
        size: "md",
      },
      color: {
        //   white: {
        //     solid:
        //       "ring-1 ring-inset ring-purple-300 dark:ring-purple-700 text-purple-900 dark:text-white bg-purple-50 hover:bg-purple-100 disabled:bg-white dark:bg-purple-900 dark:hover:bg-purple-800/50 dark:disabled:bg-purple-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        //   },
        gray: {
          ghost: "text-purple-400 hover:text-gray-300 hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500",
        },
        //   black: {
        //     solid:
        //       "text-white dark:text-purple-900 bg-purple-900 hover:bg-purple-800 disabled:bg-purple-900 dark:bg-white dark:hover:bg-purple-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        //   },
      },
      variant: {
        solid:
          "text-white bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500",
      },
    },
    pagination: {
      default: {
        size: "md",
        prevButton: {
          color: "gray",
          icon: "i-heroicons-arrow-small-left-20-solid",
        },
        nextButton: {
          color: "gray",
          icon: "i-heroicons-arrow-small-right-20-solid",
        },
      },
    },
    card: {
      base: "w-full h-full",
      background: "bg-purple-900",
      rounded: "rounded-md",
      divide: "divide-y divide-purple-800",
      shadow: "",
      ring: "",
      body: {
        base: "flex flex-col h-full justify-between",
      },
      header: {
        padding: "",
      },
      footer: {
        padding: "",
      },
    },
    // skeleton: {
    //   background: "bg-purple-800",
    // },
    table: {
      wrapper: "relative overflow-x-scroll",
      divide: "divide-y divide-purple-700",
      tbody: "divide-y divide-purple-800",
      th: {
        color: "text-purple-400",
      },
      td: {
        color: "text-gray-50",
      },
    },
    popover: {
      background: "bg-purple-900",
      ring: "ring-1 ring-gray-800",
    },
    // select: {
    //   color: {
    //     white: {
    //       outline:
    //         "bg-purple-900 text-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
    //     },
    //     gray: {
    //       outline:
    //         "bg-purple-50 text-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
    //     },
    //   },
    //   variant: {
    //     outline:
    //       "bg-transparent text-neutral-900 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    //     none: "bg-transparent focus:ring-0 focus:shadow-none",
    //   },
    // },
    // selectMenu: {
    //   background: "bg-neutral-50 dark:bg-neutral-800",
    //   input:
    //     "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-neutral-700 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-800 border-0 border-b border-neutral-200 dark:border-neutral-700 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none",
    // },
    // dropdown: {
    //   background: "bg-neutral-50 dark:bg-neutral-800",
    //   shadow: "shadow-md",
    //   width: "w-48",
    //   item: {
    //     active: "bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white",
    //   },
    // },
    checkbox: {
      background: "bg-purple-800",
      border: "border border-purple-700",
    },
    tabs: {
      container: "relative w-full hidden",
      list: {
        background: "bg-purple-900",
        marker: {
          background: "bg-purple-950",
        },
        tab: {
          active: "text-purple-200",
        },
      },
    },
    // tooltip: {
    //   width: "max-w-xs",
    //   rounded: "rounded-md",
    //   base: "h-full px-2 py-1 text-xs font-normal",
    // },
  },
});
