/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: 
		{
			animation: 
			{
				'wave': 'wave 4s linear infinite',
			},
			keyframes: 
			{
				wave: 
				{
					
				  '0%': { backgroundPosition: '0% 50%' },
				  '100%': { backgroundPosition: '100% 50%' },
				},
			},
		},
	plugins: [],
	
	}


}