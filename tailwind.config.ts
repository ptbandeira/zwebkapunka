import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        background: '#ffffff',
                        foreground: '#1f2937',
                        card: {
                                DEFAULT: '#ffffff',
                                foreground: '#1f2937'
                        },
                        popover: {
                                DEFAULT: '#ffffff',
                                foreground: '#1f2937'
                        },
                        primary: {
                                DEFAULT: '#3b82f6',
                                foreground: '#ffffff',
                                50: '#eff6ff',
                                100: '#dbeafe',
                                200: '#bfdbfe',
                                300: '#93c5fd',
                                400: '#60a5fa',
                                500: '#3b82f6',
                                600: '#2563eb',
                                700: '#1d4ed8',
                                800: '#1e40af',
                                900: '#1e3a8a'
                        },
                        secondary: {
                                DEFAULT: '#6b7280',
                                foreground: '#ffffff',
                                50: '#f9fafb',
                                100: '#f3f4f6',
                                200: '#e5e7eb',
                                300: '#d1d5db',
                                400: '#9ca3af',
                                500: '#6b7280',
                                600: '#4b5563',
                                700: '#374151',
                                800: '#1f2937',
                                900: '#111827'
                        },
                        success: {
                                DEFAULT: '#16a34a',
                                foreground: '#ffffff',
                                50: '#f0fdf4',
                                100: '#dcfce7',
                                200: '#bbf7d0',
                                300: '#86efac',
                                400: '#4ade80',
                                500: '#22c55e',
                                600: '#16a34a',
                                700: '#15803d',
                                800: '#166534',
                                900: '#14532d'
                        },
                        warning: {
                                DEFAULT: '#eab308',
                                foreground: '#1f2937',
                                50: '#fefce8',
                                100: '#fef9c3',
                                200: '#fef08a',
                                300: '#fde047',
                                400: '#facc15',
                                500: '#eab308',
                                600: '#ca8a04',
                                700: '#a16207',
                                800: '#854d0e',
                                900: '#713f12'
                        },
                        danger: {
                                DEFAULT: '#dc2626',
                                foreground: '#ffffff',
                                50: '#fef2f2',
                                100: '#fee2e2',
                                200: '#fecaca',
                                300: '#fca5a5',
                                400: '#f87171',
                                500: '#ef4444',
                                600: '#dc2626',
                                700: '#b91c1c',
                                800: '#991b1b',
                                900: '#7f1d1d'
                        },
                        info: {
                                DEFAULT: '#0ea5e9',
                                foreground: '#ffffff',
                                50: '#f0f9ff',
                                100: '#e0f2fe',
                                200: '#bae6fd',
                                300: '#7dd3fc',
                                400: '#38bdf8',
                                500: '#0ea5e9',
                                600: '#0284c7',
                                700: '#0369a1',
                                800: '#075985',
                                900: '#0c4a6e'
                        },
                        muted: {
                                DEFAULT: '#f3f4f6',
                                foreground: '#4b5563'
                        },
                        accent: {
                                DEFAULT: '#3b82f6',
                                foreground: '#ffffff'
                        },
                        destructive: {
                                DEFAULT: '#dc2626',
                                foreground: '#ffffff'
                        },
                        border: '#d1d5db',
                        input: '#d1d5db',
                        ring: '#3b82f6',
                        chart: {
                                '1': '#3b82f6',
                                '2': '#16a34a',
                                '3': '#facc15',
                                '4': '#f97316',
                                '5': '#dc2626'
                        }
                },
                fontFamily: {
                        sans: ['var(--font-open-sans)'],
                        serif: ['var(--font-montserrat)']
                },
                fontSize: {
                        xs: ['12px', { lineHeight: '1.4' }],
                        sm: ['15px', { lineHeight: '1.5' }],
                        base: ['18px', { lineHeight: '1.5' }],
                        lg: ['24px', { lineHeight: '1.2' }],
                        xl: ['30px', { lineHeight: '1.2' }],
                        '2xl': ['37px', { lineHeight: '1.2' }],
                        '3xl': ['46px', { lineHeight: '1.2' }]
                },
                lineHeight: {
                        heading: '1.2',
                        body: '1.5',
                        ui: '1.4'
                },
                fontWeight: {
                        light: '300',
                        regular: '400',
                        semibold: '600',
                        bold: '700'
                },
                letterSpacing: {
                        tight: '-0.02em',
                        normal: '0',
                        caps: '0.05em'
                },
                spacing: {
                        1: '4px',
                        2: '8px',
                        3: '12px',
                        4: '16px',
                        6: '24px',
                        8: '32px',
                        12: '48px',
                        16: '64px'
                },
                borderRadius: {
                        xs: '2px',
                        sm: '4px',
                        md: '8px',
                        lg: '12px',
                        xl: '16px'
                }
        }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
