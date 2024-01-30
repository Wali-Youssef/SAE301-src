<script>
import { ref , defineProps } from 'vue'
import { RouterLink } from 'vue-router';

</script>

<template>
 

 <header class='shadow-md font-sans'>
      <section class='py-2 bg-[#007bff] text-white text-right px-10'>
        <p class='text-sm'><strong class="mx-2">Address:</strong>SWF New York 185669<strong class="mx-2">Contact
            No:</strong>1800333665</p>
      </section>
      <div class='flex flex-wrap items-center justify-between gap-4 px-10 py-4 relative bg-white min-h-[70px]'>
        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
        </a>
        <div class='flex max-lg:ml-auto lg:order-1'>
          <button id="toggle" class='lg:hidden'>
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <ul id="collapseMenu" class='lg:!flex lg:space-x-4 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
            <a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Team</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Feature</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Blog</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>About</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Contact</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Source</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Partner</a>
          </li>
          <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>More</a>
          </li>
        </ul>
      </div>
    </header>
</template>


