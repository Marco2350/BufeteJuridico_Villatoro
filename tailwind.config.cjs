/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Editorial luxury palette — warm authority
        oxblood: {
          DEFAULT: '#3B1F1F',
          900: '#2A1414',
          800: '#3B1F1F',
          700: '#4A2727',
          600: '#5C3232',
          500: '#7A4747',
        },
        bronze: {
          DEFAULT: '#A87A4B',
          light: '#C39A6F',
          dark: '#7E5A36',
        },
        bone: {
          DEFAULT: '#F2EDE4',
          50: '#FAF7F1',
          100: '#F2EDE4',
          200: '#E6DFD1',
          300: '#D4CABA',
        },
        ink: {
          DEFAULT: '#1A1614',
          80: 'rgba(26, 22, 20, 0.80)',
          70: 'rgba(26, 22, 20, 0.70)',
          60: 'rgba(26, 22, 20, 0.60)',
          40: 'rgba(26, 22, 20, 0.40)',
          20: 'rgba(26, 22, 20, 0.20)',
          10: 'rgba(26, 22, 20, 0.10)',
        },
      },
      fontFamily: {
        // Loaded in BaseLayout.astro
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
      },
      borderRadius: {
        'bezel-outer': '28px',
        'bezel-inner': '22px',
      },
      boxShadow: {
        // Tinted in oxblood family for cohesion
        editorial: '0 30px 80px -30px rgba(59, 31, 31, 0.18)',
        bezel: '0 1px 0 rgba(255, 250, 240, 0.45) inset, 0 -1px 0 rgba(59, 31, 31, 0.06) inset',
        soft: '0 18px 50px -24px rgba(59, 31, 31, 0.22)',
        deep: '0 40px 90px -40px rgba(42, 20, 20, 0.55)',
      },
      backgroundImage: {
        'mesh-oxblood':
          'radial-gradient(circle at 18% 12%, rgba(168, 122, 75, 0.18) 0, transparent 45%), radial-gradient(circle at 88% 78%, rgba(168, 122, 75, 0.12) 0, transparent 40%), linear-gradient(180deg, #2A1414 0%, #3B1F1F 100%)',
        'mesh-bone':
          'radial-gradient(circle at 12% 8%, rgba(168, 122, 75, 0.08) 0, transparent 55%), radial-gradient(circle at 92% 90%, rgba(59, 31, 31, 0.06) 0, transparent 50%), #F2EDE4',
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.105 0 0 0 0 0.084 0 0 0 0 0.076 0 0 0 0.12 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.32, 0.72, 0, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 900ms cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'fade-in': 'fadeIn 700ms cubic-bezier(0.32, 0.72, 0, 1) forwards',
        marquee: 'marquee 38s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
