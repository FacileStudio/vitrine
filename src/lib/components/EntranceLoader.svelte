<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { prefersReducedMotion } from "@facile/muse";

  let percent = $state(0);
  let visible = $state(true);
  let stackEl: HTMLDivElement | null = $state(null);
  let curtainEl: HTMLDivElement | null = $state(null);

  onMount(() => {
    if (prefersReducedMotion()) {
      visible = false;
      return;
    }

    document.body.style.overflow = "hidden";

    const counter = { val: 0 };
    const counterTween = gsap.to(counter, {
      val: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => {
        percent = Math.floor(counter.val);
      },
      onComplete: () => {
        const tl = gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = "";
            visible = false;
          },
        });

        tl.to(".disappear", {
          y: "-110%",
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.inOut",
        })
          .to(
            stackEl,
            {
              height: 0,
              duration: 1.3,
              ease: "power4.inOut",
            },
            "-=0.1",
          )
          .to(
            curtainEl,
            {
              height: 0,
              duration: 1.6,
              ease: "power4.inOut",
            },
            "-=1.1",
          );
      },
    });

    return () => {
      document.body.style.overflow = "";
      counterTween.kill();
    };
  });
</script>

{#if visible}
  <div
    bind:this={curtainEl}
    class="rideaux fixed top-0 left-0 z-50 h-screen w-screen overflow-hidden rounded-b-[48px] border-b border-fc-fg/10 bg-fc-surface text-fc-fg shadow-2xl sm:rounded-b-[64px]"
  ></div>

  <div
    bind:this={stackEl}
    class="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden rounded-b-[48px] border-b border-fc-fg/10 bg-fc-page text-fc-fg shadow-2xl sm:rounded-b-[64px]"
  >
    <div class="overflow-hidden">
      <svg viewBox="0 0 23 25" class="disappear h-20 w-auto text-fc-fg fill-current sm:h-24">
        <path
          d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z"
        />
      </svg>
    </div>

    <div class="overflow-hidden">
      <div class="disappear font-mono text-3xl font-extrabold tabular-nums text-fc-fg sm:text-4xl">
        {percent}%
      </div>
    </div>

    <div class="flex flex-col gap-1 text-center font-medium text-fc-sm text-fc-fg-muted">
      <div class="overflow-hidden">
        <div class="disappear">Où le design exceptionnel rencontre</div>
      </div>
      <div class="overflow-hidden">
        <div class="disappear">l'excellence technique</div>
      </div>
    </div>
  </div>
{/if}
