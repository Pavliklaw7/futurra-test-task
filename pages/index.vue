<template>
    <header class="flex items-center justify-start w-full max-w-[1170px] mx-auto h-[56px] mb-[65px]">
        <NuxtImg class="w-[179px]" src="a/logo.png" alt="planet learn logo"/>
    </header>
    <main class="flex flex-col items-center">
        <div class="grid grid-cols-[473px_474px]">
            <div class="flex flex-col items-start">
                <h1 class="mb-6">
                    Start your learning journey now
                </h1>
                <h4 class="mb-8">
                    Get a PlanetLearn plan to rock self-learning
                </h4>
                <BaseButton title="Get my plan"/>
            </div>
            <div class="card">
                <div class="flex items-center justify-between">
                    <div class="flex flex-col items-start mb-6">
                        <h4>
                            3-day trial for $0.99
                        </h4>
                        <p>
                            Then $9.99
                        </p>
                        <p>
                            $39.99/week
                        </p>
                    </div>
                    <Timer/>
                </div>
                <ul class="grid justify-start list-image-[url(~/assets/icons/star.svg)] mb-6 pl-6">
                    <li class="mb-4">
                        Exclusive access to 350+ learning programs
                    </li>
                    <li class="mb-4">
                        Personalized course plan
                    </li>
                    <li class="mb-4">
                        Comfy learning schedule made by you                    
                    </li>
                    <li class="mb-4">
                        24/7 tutor support in a secure chat                    
                    </li>
                    <li class="mb-4">
                        Lifetime access to materials                    
                    </li>
                </ul>
                <BaseButton class="mb-6" w-full title="Safe & secure payment" icon="lock" />
                <p class="text-xs text-center">
                    $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .
                </p>
            </div>
        </div>
    </main>
    <BaseModal />
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>