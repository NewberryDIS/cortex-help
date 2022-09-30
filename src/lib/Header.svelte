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
    <Nogo  {nogoColor} />
    <h1 style={`color: ${nogoColor}`}>Digital Collections</h1>
  </Header>
  
  <SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
      <SideNavLink text="Link 1" />
      <SideNavLink text="Link 2" />
      <SideNavLink text="Link 3" />
      <SideNavMenu text="Menu">
        <SideNavMenuItem href="/" text="Link 1" />
        <SideNavMenuItem href="/" text="Link 2" />
        <SideNavMenuItem href="/" text="Link 3" />
      </SideNavMenu>
    </SideNavItems>
  </SideNav>
  
  <style>
       h1 {
        
        padding-left: 70px;
        font-family: 'Flecha M Medium';
    }
  </style>