<template>
    <nav id="navigationMenu" v-if="navigationMenuVisible" class="fixed inset-0 z-50 bg-primary-800/50">
        <div v-click-out-side="clickedOutSideMenu" class="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="fixed right-0 px-4 pt-2">
                 <button type="button" class="p-2 rounded focus:outline-none focus:ring text-morty-700" @click="navigationMenuVisible = false">
                    <IconXMark class="text-primary-700 stroke-2 h-7 w-7" />
                </button>
            </div>
            <div class="mt-10 flow-root">
                <div class="divide-y divide-primary-100">
                    <HeaderTitle class="pb-2">Navigation</HeaderTitle>
                    <div class="space-y-2 pt-2">
                        <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href"
                            class="-mx-3 block rounded-lg px-3 py-2 text-lg font-sans leading-7 text-primary-700 hover:bg-primary-100">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside';

const navigationMenuVisible = useState('navigationMenuVisible', () => false);

const navigation = [
    { name: 'Paginated search', href: '/' },
    { name: 'Infinite scrolling', href: '/infinite' },
    { name: 'About', href: '/about' },
]

const clickedOutSideMenu = (event: Event) => {
    if (event.target) {
        const el = document.getElementById('toggleNavigationButton');
        if (el && (el == event.target || el.contains(event.target as HTMLElement)))
            return;
        navigationMenuVisible.value = false;
    }
}

</script>