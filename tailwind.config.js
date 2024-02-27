module.exports = {
    content: [
      './content/**/*.md',
      './layouts/**/*.html',
      // wherever else you use tailwind classes
    ],
    theme: {
      extend: {
      }
    },
    variants: {},
    plugins: [require('@tailwindcss/typography'),
    ]
  }
  