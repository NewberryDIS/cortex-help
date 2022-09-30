<script>
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SkipToContent,
  } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";
	import Nogo from "./Nogo.svelte";
  let isSideNavOpen = true;
  export let colors
  export let nogoColor
</script>
  
<Header >
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <Nogo {nogoColor} />
  <h1 style={`color: ${nogoColor}`}>Digital Collections</h1>
</Header>
  
<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink href="/#about" text="About" />
    <SideNavLink href="/#create-account" text="Create an account" />
    <SideNavMenu text="Search Tips">
      <SideNavMenuItem href="/#refine" text="Refine with filters" />
      <SideNavMenuItem href="/#customize" text="Customize results with View &amp; Sort menu" />
      <SideNavMenuItem href="/#mods" text="Modifiers and wildcards" />
    </SideNavMenu>
    <SideNavMenu text="Share">
      <SideNavMenuItem href="/#urls" text="Persistent URLs" />
      <SideNavMenuItem href="/#cite" text="Citations" />
      <SideNavMenuItem href="/#social-media" text="Social media" />
    </SideNavMenu>
    <SideNavLink href="/#download" text="Download" />
    <SideNavLink href="/#permissions" text="Use &amp; permissions" />
    <SideNavMenu text="FAQs">
      <SideNavMenuItem href="/" text="Coming soon" />
    </SideNavMenu>
    <SideNavLink href="/#contact" text="Contact us" />
  </SideNavItems>
</SideNav>
  
<style>
  h1 {
    padding-left: 70px;
    font-family: 'Flecha M Medium';
  }
</style>