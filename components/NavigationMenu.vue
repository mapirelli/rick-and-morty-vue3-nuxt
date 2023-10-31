<template>
    <nav v-if="navigationMenuVisible" class="fixed inset-0 z-50">
        <div
            class="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <div></div>
                <button type="button" class="rounded text-morty-700" @click="navigationMenuVisible = false">
                    <IconXMark class="text-primary-700 stroke-2 h-7 w-7" />
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="divide-y divide-primary-100">
                    <HeaderTitle class="pb-2">Navigation</HeaderTitle>
                    <div class="space-y-2 pt-2">
                        <a v-for="item in navigation" :key="item.name" :href="item.href"
                            class="-mx-3 block rounded-lg px-3 py-2 text-lg font-sans leading-7 text-primary-700 hover:bg-primary-100">
                            {{ item.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
const navigationMenuVisible = useState('navigationMenuVisible', () => false);
const navigation = [
    { name: 'Paginated search', href: '#' },
    { name: 'Infite scrolling', href: '#' },
    { name: 'About', href: '#' },
]
</script>