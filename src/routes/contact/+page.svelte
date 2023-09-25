<script>
  import ContactBlock from "../../lib/contact/ContactBlock.svelte";
  import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import MdEmail from 'svelte-icons/md/MdEmail.svelte';
  import IoIosPin from 'svelte-icons/io/IoIosPin.svelte';
</script>
<svelte:head>
	<title>Software Developer Portfolio: Shalaw Fatah, Contact</title>
  <meta charset="UTF-8">
  <meta name="description" content="This is the portfolio of Shalaw Fatah, Contact page, a software Developer">
  <meta name="keywords" content="Javascript, React, Svelte, Software">
  <meta name="author" content="Shalaw Fatah">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div class="flex justify-center bg-[#111727] py-4 text-white min-h-screen">
    <div class="max-w-screen-xl">
        <h1 class="text-4xl font-bold text-center mb-4 text-white">About me</h1>
        <svg class="h-20 mx-auto  text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
        </svg> 
        <div class="max-w-2xl mx-8">
            <p class="leading-10 first-letter">
                My name is Shalaw. I'm a software developer. I've built websites, worked on both frontend and backend, and on mobile applications. The language I'm best at is Javascript, but I might try Python for real soon.
            </p>
                <p class="leading-10 ">I love coding and it's becoming a true passion for me.</p>
            
            <p class="leading-10 first-letter ">
                There is a true potential to build things that could make an impact with coding. However, what's more important is to have a creative mindset to cultivate your passion.
            </p>
            <p class="leading-10">
                My goal is to use my knowledge to build a project that is truly impactful, to help the way advance towards a better world.
                <p class="leading-10 ">However, this is not a given.</p>
            <p class="leading-10 first-letter ">
                I have to learn every day and work hard to reach a point where the only thing that is remaining is your ability to think of solutions.
            </p>
            <p class="leading-10 ">
                Until that, I'll work with any project and anyone I deem good.
            </p>

            <div class="mt-12">
                <h1 class="text-4xl font-bold text-center my-4 text-white">Contact me</h1>
                <div class="my-4 flex justify-center">
                    <div class="flex flex-wrap justify-center gap-4">
                        <ContactBlock target="_self" link="#" text="@Canada">
                            <IoIosPin />
                        </ContactBlock>
                        <ContactBlock link="mailto:shalaw.fatah@gmail.com" text="@shalaw.fatah">
                            <MdEmail />
                        </ContactBlock>
                        <ContactBlock link="https://linkedin.com/in/shalawfatah" text="@shalawfatah">
                            <FaLinkedin />
                        </ContactBlock>
                        <ContactBlock link="https://github.com/shalawfatah" text="@shalawfatah">
                            <DiGithubBadge />
                        </ContactBlock>
                    </div>
                </div>
            </div>
            </div>
    </div>
</div>

<style>
    .first-letter::first-letter {
        font-size: 40px;
        font-weight: 900; /* This is equivalent to Tailwind's 'font-black' */
        color: #34509C;
        }
</style>