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
  export let nogoColor
</script>
  
<Header >
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <a href="https://newberry.org"><Nogo {nogoColor} /></a>
  <a href="https://collections.newberry.org"><h1 style={`color: ${nogoColor}`}>Digital Collections</h1></a>
</Header>
  
<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink href="/#about" text="About" />
    <SideNavLink href="/#create-account" text="Create an Account" />
    <SideNavLink href="/#favs" text="Save Favorites" />
    <SideNavMenu text="Search &amp; Browse">
      <SideNavMenuItem href="/#refine" text="Refine with Filters" />
      <SideNavMenuItem href="/#customize" text="Customize Results with View &amp; Sort Menu" />
      <SideNavMenuItem href="/#mods" text="Modifiers and Wildcards" />
    </SideNavMenu>
    <SideNavMenu text="Share">
      <SideNavMenuItem href="/#urls" text="Persistent URLs" />
      <SideNavMenuItem href="/#cite" text="Citations" />
    </SideNavMenu>
    <SideNavLink href="/#download" text="Download" />
    <!-- <SideNavLink href="/#permissions" text="Use &amp; Permissions" /> -->
    <!-- <SideNavMenu text="FAQs">
      <SideNavMenuItem href="/" text="Coming Soon" />
    </SideNavMenu> -->
    <!-- <SideNavLink href="/#contact" text="Contact Us" /> -->
  </SideNavItems>
</SideNav>
  
<style>
  a {
    text-decoration: none !important;
  }
  a:hover {
    text-decoration: none !important;
  }
  h1 {
    padding-left: 70px;
    font-family: 'Flecha M Medium';
  }
</style>