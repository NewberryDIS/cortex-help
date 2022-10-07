<script>
    export const prerender = true;
    import { browser } from "$app/environment";

    import "$styles/fonts.css";
    import "$styles/globals.css";
    import "$styles/overrides.css";

    import Header from "$lib/Header.svelte";
    import { Content, Grid, Row, Column, Tabs, Tab, TabContent, UnorderedList, ListItem, Accordion, AccordionItem } from "carbon-components-svelte";
    import "carbon-components-svelte/css/all.css";

  let selected = 0;
</script>

<Header />

<div class="main-content">
    <Content>
        <Grid>
            <Row>
                <Column>
                    <h2>Help</h2>
                    <div class="tabs-content-wrapper">
                        <Accordion align="start">
                            
                                <AccordionItem title="About this Site">
                                    <h3>About This Site</h3>
                                    <div class="tab-content-wrapper">
                                        <p>
                                            Welcome to <a href="https://collections.newberry.org/">Newberry Digital Collections (NDC)</a>! This site features thousands of digitized manuscripts, maps, books, photographs, artworks, audio and video recordings, and other rare and unique materials from the collections of the Newberry, Chicago's independent research library since 1887. The content here represents only a fraction of the library's vast holdings; materials are continuously digitized and made freely available online as resources allow. To support these efforts, visit <a href="https://www.newberry.org/give">Give to the Newberry</a>.
                                        </p>
                                    </div>
                                </AccordionItem>
                                <AccordionItem title="Create Account">
                                    <h3>How To Create an Account</h3>
                                    <div class="tab-content-wrapper">
                                        <p>
                                            While you’re welcome to use NDC without registering, you have the option to register for a user account in order to easily bookmark and share favorite items.
                                        </p>
                                        <p>To sign up, use the link at the top right of the screen, click the “Sign up” button, and fill out the registration form.</p>
                                        <img class="help-img" src="create-1.png" alt="Click 'Sign Up'" />
                                    </div>
                                </AccordionItem>
                                <AccordionItem title="Save Favorites">
                                    <h3>Saving Favorites</h3>
                                    <div class="tab-content-wrapper">
                                        <p>Once you’re signed in, you’ll see a new menu option at the top right: My Collections, where you can save different sets of favorites.</p>
                                        <img class="help-img" src="fave-0.png" alt="" />
                                        <p class="instructions">To create a collection, click the “Add to Collection” button under any NDC item:</p>
                                        <img class="help-img" src="fave-1.png" alt="" />
                                        <p class="instructions">This will open a pop-up window, where you’ll be prompted to add the item to a new or existing collection:</p>
                                        <img class="help-img" src="fave-2.png" alt="" />
                                        <p class="instructions">
                                            View your saved items by clicking “My Collections” at the top right screen; from there, you can invite others to view and/or edit your collection via “Manage Collaborators”, or create a URL accessible to anyone with the “Share” option.
                                        </p>
                                        <img class="help-img" src="fave-3.png" alt="" />
                                    </div>
                                </AccordionItem>
                                <AccordionItem title="Search & Browse">
                                    <h3>Search Tips</h3>
                                    <div class="tab-content-wrapper">
                                        <p>
                                            The NDC home page offers three paths into the collections: use the search box at the upper right if you know what you're looking for; click the Browse All button if you want to see everything that's available; or select one of the tiles in the Explore section to browse specific formats or subject areas.
                                        </p>

                                        <img class="help-img" src="search-1.png" alt="" />
                                        <div class="content-div" id="refine">
                                            <h4>Refine with filters</h4>
                                            <p>
                                                Once you have a set of results, you can further refine your query using the filters side panel at the left of the screen. The side panel is a dynamic list of headings that changes depending on the attributes of your results.Check the boxes to narrow results by broad Type, specific Format, Creator, Subject, etc. Each time you choose a term, you’ll see the search results refresh to include only those that match the criteria you’ve selected. To undo a filter selection, click the box again to uncheck it, or use the “clear all” symbol 🚫 at the top of each facet.
                                            </p>
                                            <img class="help-img" src="refine-1.png" alt="" />
                                        </div>
                                        <div class="content-div" id="customize">
                                            <h4>Customize results with View &amp; Sort menu</h4>
                                            <p>
                                                The View & Sort menu allows you to change the display of items on the results page. Click the button located immediately above your results will launch a pop-up menu with the following categories:
                                            </p>
                                            <dl class="">
                                                <dt class="">View:</dt>
                                                <dd class="">Manage how items display.</dd>
                                                <br />
                                                <dt class="">Sort:</dt>
                                                <dd class="">Manage the order in which item display.</dd>
                                                <br />
                                                <dt class="">Count:</dt>
                                                <dd class="">
                                                    Manage the number of items that display per page. The higher the count, the longer it may take for the page to load.
                                                </dd>
                                            </dl>
                                            <img class="help-img" src="customize-1.png" alt="" />
                                            <img class="help-img" src="customize-2.png" alt="" />
                                            <p>To restore the original settings, select the “reset to default” option in the lower left corner.</p>
                                        </div>
                                        <div class="content-div" id="mods">
                                            <h4>Modifiers and wildcards</h4>
                                            <dl class="grid-container">
                                                <dt class="grid-item">AND</dt>
                                                <dd class="grid-item">search for all values entered in the Search Bar.</dd>
                                                <div />
                                                <dd class="grid-item bottom-spacer"><em>example: </em> postcards AND beaches</dd>
                                                <dt class="grid-item">NOT</dt>
                                                <dd class="grid-item">exclude certain values.</dd>
                                                <div />
                                                <dd class="grid-item bottom-spacer"><em>example: </em> books NOT directories</dd>
                                                <dt class="grid-item">OR</dt>
                                                <dd class="grid-item">broaden your search to include any of the terms.</dd>
                                                <div />
                                                <dd class="grid-item bottom-spacer"><em>example: </em> greeting cards OR valentines</dd>
                                                <dt class="grid-item">( )</dt>
                                                <dd class="grid-item">when using multiple modifiers, parentheses specify the order in which they’re executed.</dd>
                                                <div />
                                                <dd class="grid-item bottom-spacer"><em>example: </em> (maps OR atlases) NOT guidebooks</dd>
                                                <dt class="grid-item">“ “</dt>
                                                <dd class="grid-item">quotation marks allow exact searching of a phrase.</dd>
                                                <div />
                                                <dd class="grid-item bottom-spacer"><em>example: </em> “commonplace book”</dd>
                                                <dt class="grid-item">*</dt>
                                                <dd class="grid-item">the asterisk broadens search by substituting for multiple characters.</dd>
                                                <div />
                                                <dd class="grid-item bottom-spacer">
                                                    <em>example: </em> snow* – retrieves results with the values snow, snowflake, snowstorm, etc.
                                                </dd>
                                                <dt class="grid-item">?</dt>
                                                <dd class="grid-item">the question mark broadens search by substituting for a single character.</dd>
                                                <div />
                                                <dd class="grid-item bottom-spacer">
                                                    <em>example: </em> organi?ation – retrieves results with the values organization and organisation.
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </AccordionItem>
                                <AccordionItem title="Share">
                                    <h3>Share</h3>
                                    <div class="tab-content-wrapper">
                                        <p>
                                            The Newberry seeks to make its collection as freely accessible and shareable as possible, in support of our mission to inspire research and learning in the humanities.
                                        </p>
                                        <p>
                                            In order to <span class="bold">share an item</span>, you can create a persistent URL using the “Copy permanent link” button immediately below the viewer panel. Do not use the browser URL; it will just redirect to the Browse All results screen.
                                        </p>
                                        <img class="help-img" src="share-1.png" alt="" />
                                        <p>
                                            In order to <span class="bold"> share a set of results</span>, use the browser URL; this will create a permanent link for re-use.
                                        </p>
                                        <img class="help-img" src="share-2.png" alt="" />
                                    </div>
                                </AccordionItem>
                                <AccordionItem title=" Download">
                                    <h3>How to Download Content</h3>
                                    <div class="tab-content-wrapper">
                                        <p>There are numerous ways to download content from NDC:</p>
                                        <div class="carbon-ul">
                                            <UnorderedList>
                                                <ListItem>from the item view, use the Download button directly below the image viewer;</ListItem>
                                                <img class="help-img" src="download-1.png" alt="" />
                                                <ListItem>from the browse view, hover on the item’s thumbnail and click the Download icon;</ListItem>
                                                <img class="help-img" src="download-2.png" alt="" />
                                                <ListItem>
                                                    to download multiple items at once, select two or more from the browse view by clicking the checkbox on the browse thumbnail; this will cause a menu to appear at the bottom of the page that includes a download option at lower right.
                                                </ListItem>
                                                <img class="help-img" src="download-3.png" alt="" />
                                            </UnorderedList>
                                        </div>
                                        <p>Selecting any of these options will open a pop-up menu with three sections:</p>
                                        <dl class="rights-dl">
                                            <dt class="grid-item">Stacked assets:</dt>
                                            <dd class="grid-item">
                                                When your item consists of multiple files (e.g. a postcard with front and back images; a book with page images; etc.), the default setting is to download all files. The “Images” section will let you know the number of files in the set. (To download a subset of files in the set, see below.)
                                            </dd>
                                        </dl>
                                        <dl class="rights-dl">
                                            <dt class="grid-item">Requestor status & use:</dt>
                                            <dd class="grid-item">Please choose the best fit from the menu options.</dd>
                                        </dl>
                                        <dl class="rights-dl">
                                            <dt class="grid-item">Image format:</dt>
                                            <dd class="grid-item">Select from medium resolution jpegs or a highest-resolution tiff file</dd>
                                        </dl>
                                        <p>When you don’t want to download an entire set, e.g. only a few pages from this 302-page manuscript object</p>
                                        <p>Locate a page you’re interested in, then right-click on the image and select “View page details”.</p>
                                        <p>
                                            This will shift the view from displaying the page within the compound object viewer, to displaying the page as an individual file. From there, use the Download button to save only that file. Repeat this process for each file of your desired subset.
                                        </p>
                                        <p>
                                            Alternatively, from the compound object viewer, you may scroll to the bottom of the screen to view page thumbnails, select your preferred subset via checkboxes, and use the Download option at the lower right corner.
                                        </p>
                                    </div>
                                </AccordionItem>
                                <AccordionItem title="Use &amp; Permissions">
                                    <h3>Use & permissions</h3>
                                    <div class="tab-content-wrapper">
                                        <p>
                                            The Newberry makes its collections available for any lawful purpose, commercial or non-commercial, without licensing or permission fees to the library, subject to the terms and conditions outlined here. In addition to this institutional policy, specific copyright information at the item level may be found in the metadata record accompanying each asset.
                                        </p>
                                        <h4>Rights Status</h4>
                                        <p>The Rights Status field of an item’s metadata record typically contains one of three values below.</p>
                                        <dl class="rights-dl">
                                            <dt>No Copyright - United States</dt>
                                            <dd>The library has determined that the item is free of copyright under the laws of the United States.</dd>
                                            <dt>Copyright Not Evaluated</dt>
                                            <dd>The library has not yet undertaken an effort to determine the item’s copyright status.</dd>
                                            <dt>In Copyright</dt>
                                            <dd>
                                                The library has determined that the item is in copyright and either is the rights-holder, has obtained permission from the rights-holder(s) to make their work(s) available, or makes the item available under an exception or limitation to copyright (including Fair Use) that entitles it to make the item available. The Rights Status: In Copyright field is often paired with a copyright statement field containing instructions on seeking permission for re-use, as in the example below.
                                            </dd>
                                        </dl>
                                        <p>
                                            Users seeking only copyright-free content can narrow their NDC results by using the Rights Status filter and selecting the No Copyright - United States option.
                                        </p>
                                        <p>For more information about these statements, see the <a href="https://rightsstatements.org/en/">RightsStatements.org</a> website.</p>
                                        <h4>Citations</h4>
                                        <p>
                                            While it’s not required, we would appreciate the inclusion of the credit “Newberry Library” and a link to the item in the digital collection when repurposing NDC content. Tracking such use helps us justify and prioritize future digitization projects.
                                        </p>
                                    </div>
                                </AccordionItem>
                                <AccordionItem title="Contact Us">
                                    <h3>Contact Us</h3>
                                    <div class="tab-content-wrapper">
                                        <p>
                                            This site was created and maintained by the Newberry’s Digital Initiatives & Services department. Contact us at: <a href="mailto:dis@newberry.org">dis@newberry.org</a>
                                        </p>
                                        <p>
                                            For questions about the collection materials featured on this site, please <a href="https://www.newberry.org/contact-librarian" >contact a Newberry reference librarian</a>
                                        </p>
                                    </div>
                                </AccordionItem>
                            </Accordion>
                    </div>
                </Column>
            </Row>
        </Grid>
    </Content>
</div>

<style>
    .grid-container,
    .grid-container-withimgs {
        display: grid;
        padding: 10px 0 !important;
    }
    .grid-container {
        grid-template-columns: 70px auto;
    }
    .grid-container-withimgs {
        grid-template-columns: 175px auto;
    }
    .bottom-spacer {
        margin-bottom: 7px;
    }
    .bold {
        font-weight: bold;
    }
    .carbon-ul {
        margin: 10px;
    }
    .help-img {
        display: block;
        margin: 25px auto;
        border: 1px solid rgba(0, 0, 0, 1) !important;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        max-width: 90%;
    }
    .main-content {
        width: 90%;
        min-width: 450px;
        margin: auto;
    }
    .main-content dl,
    .main-content div > div {
        padding-left: 20px;
    }
    .main-content h3,
    .main-content dt {
        font-size: 24px;
    }
    .main-content dd,
    .rights-dl dt {
        font-family: "Signifier" !important;
        font-size: 16px;
        line-height: 18px;
    }
    .main-content dt,
    .main-content dd {
        padding-top: 10px;
    }
    .inline-title,
    .inline-dd {
        display: inline-block;
        margin-right: 7px;
    }
    .rights-dl dt {
        font-weight: bold;
    }
    .rights-dl dd {
        padding-top: 3px;
    }
    .tab-content-wrapper {
        margin-top: 15px;
        width: 70%;
        min-width: 400px;
    }
    .tab-content-wrapper p,
    .tab-content-wrapper h4,
    .tabs-content-wrapper,
    h5 {
        margin-top: 15px;
    }
</style>
