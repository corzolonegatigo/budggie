import { defineConfig } from 'vite'

export default defineConfig({
  base: '/budggie/', // replace with your repo name
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        add_money: 'add_money.html',
        homepage: 'main.html', 
        payment: "payment_info.html",
        item_gained: 'item_gained.html',
        select_item: "selecting_item.html",
        signup: "signup.html",
        
        
      }
    }
  }
})
