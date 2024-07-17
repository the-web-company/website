export default defineAppConfig({
  ui: {
    primary: "blue",
    gray: "zinc",
    avatar: {
      background: "bg-gray-200 dark:bg-gray-800",
    },
    notifications: {
      position: "top-0 bottom-auto", // Show toasts at the top right of the screen
      rounded: "rounded-md",
    },
    notification: {
      background: "bg-white dark:bg-gray-950",
    },
    input: {
      color: {
        white: {
          outline:
            "shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        },
        gray: {
          outline:
            "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        },
      },
    },
    textarea: {
      color: {
        white: {
          outline:
            "shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        },
      },
    },
    card: {
      base: "w-full h-full",
      background: "bg-gray-100 dark:bg-gray-900",
      rounded: "rounded-md",
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
    skeleton: {
      background: "bg-gray-200 dark:bg-gray-800",
    },
    select: {
      color: {
        white: {
          outline:
            "shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        },
      },
    },
    tabs: {
      list: {
        background: "bg-gray-100 dark:bg-gray-800",
      },
    },
    tooltip: {
      background: "bg-white dark:bg-gray-950",
      base: "[@media(pointer:coarse)]:hidden px-2 py-1 text-xs font-normal relative h-full max-h-20 max-w-56 !text-pretty",
    },
  },
});
