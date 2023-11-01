<template>
    <SiteHeader>
        <SiteLogo />
        <ToggleNavigationButton />
    </SiteHeader>

    <div class="px-4 pt-16 pb-10 bg-gradient-to-b from-primary-200">
        <section class="container mx-auto">
            
            <HeaderSubtitle>About</HeaderSubtitle>
            <div class="text-primary-700 leading-relaxed m-2" >
                <p>
                    Coding Challenge: Vue 3, Nuxt ,Typescript, Tailwind CSS
                </p>
                <p class="font-bold underline">
                    <NuxtLink :href="'https://github.com/mapirelli/rick-and-morty-vue3-nuxt'">On Github</NuxtLink>
                </p>
            </div>
            <HeaderSubtitle class="pt-6">Author</HeaderSubtitle>
            <div class="text-primary-700 leading-relaxed m-2" >
                <p class="font-bold">
                    Mariano Pirelli Villanueva
                </p>
                <p>Fullstack web developer</p>
            </div>


        </section>
    </div>
</template>

<script setup lang="ts">
clearNuxtState([
    'navigationMenuVisible',
]);
</script>