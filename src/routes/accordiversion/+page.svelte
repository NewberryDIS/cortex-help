<script>
    export const prerender = true
    import { browser } from '$app/environment';

    import '../../styles/fonts.css';
    import '../../styles/globals.css';
    import '../../styles/overrides.css';

    import Header from '../../lib/Header.svelte'
    import Nogo from '../../lib/Nogo.svelte'
    import {
      Content,
      Grid,
      Row,
      Column,
	  Dropdown,
      Accordion, 
      AccordionItem
    } from "carbon-components-svelte";
    import "carbon-components-svelte/css/all.css";

    const colors = {
        sapphire: "#4051a3",
        parkGreen: "#20543e",
        midnight: "#111a2a",
        granite: "#eaebe7",
        lake: "#7ec4e2",
        sand: "#eadcc9",
        mulberry: "#ad285a",
        tile: "#925840",
        flame: "#f16151",
        lavender: "#cdb8d1",
        saphlav: "#8786b6",
        sandmul: "#c28892",
        granflame: "#e3a99e",
        lakemul: "#927a9c"
    }
    const collors = [
        ["Sapphire", "#4051a3"],
        ["Park Green", "#20543e"],
        ["Midnight", "#111a2a"],
        ["Granite", "#eaebe7"],
        ["Lake", "#7ec4e2"],
        ["Sand", "#eadcc9"],
        ["Mulberry", "#ad285a"],
        ["Tile", "#925840"],
        ["Flame", "#f16151"],
        ["Lavender", "#cdb8d1"],
        ["Sapphire / Lavender", "#8786b6"],
        ["Sand / Mulberry", "#c28892"],
        ["Granite / Flame", "#e3a99e"],
        ["Lake / Mulberry", "#927a9c"],
    ]
    const colorways = [
        [colors.mulberry, colors.saphlav, colors.lavender, "mulberry, sapphire / lavender, lavender"],
        [colors.mulberry, colors.sandmul, colors.sand, "mulberry, sand / mulberry, sand"],
        [colors.mulberry, colors.lakemul, colors.lake, "mulberry, lake / mulberry, lake"],
        [colors.sapphire, colors.lake, colors.granite, "sapphire, lake, granite"],
        [colors.sapphire, colors.saphlav, colors.lavender, "sapphire, sapphire / lavender, lavender"],
        [colors.sapphire, colors.lavender, colors.granite, "sapphire, lavender, granite"],
        [colors.sand, colors.flame, colors.tile, "sand, flame, tile"],
        [colors.granite, colors.mulberry, colors.flame, "granite, mulberry, flame"],
        [colors.midnight, colors.flame, colors.granite, "midnight, flame, granite"],

    ]
    
    let colorSwitchType = "text"
    let nogoColor = colors.mulberry
    const colorSwitcher = (colorNumber = 5) => {
        if (browser){
            nogoColor = colorways[colorNumber][0]
            document !== undefined && document.documentElement.style.setProperty(
                "--colorZero",
                colorways[colorNumber][0]
            );
            document !== undefined && document.documentElement.style.setProperty(
                "--colorOne",
                colorways[colorNumber][1]
            );
            document !== undefined && document.documentElement.style.setProperty(
                "--colorTwo",
                colorways[colorNumber][2]
            );
        }
    }
    colorSwitcher()
    const singleColorSwitcher = (color) => {
        console.log(colorSwitchType)
        console.log(color)
        if (browser){
            if (colorSwitchType === 'text'){
                nogoColor = color
                document !== undefined && document.documentElement.style.setProperty(
                    "--colorZero",
                    color
                );
            } else if (colorSwitchType === 'left'){
                document !== undefined && document.documentElement.style.setProperty(
                    "--colorOne",
                    color
                );
            } else {
                document !== undefined && document.documentElement.style.setProperty(
                    "--colorTwo",
                    color
                );
            }
        }
    }
    
    let hoverColor = ''
</script>
<Header {nogoColor} />


<Content>
    <Grid>
        <Row>
            <Column>
                <h2>Help</h2>
                <div class="main-content">
                    <Accordion>
                        <AccordionItem title="About">
                            <div id="about">
                                <p>
                                    Welcome to <a href="https://collections.newberry.org/">Newberry Digital Collections</a>! This site features thousands of digitized manuscripts, maps, books, photographs, artworks, audio and video recordings, and other rare and unique materials from the collections of the Newberry, Chicago's independent research library since 1887. The content here represents only a fraction of the library's vast holdings; materials are continuously digitized and made freely available online as resources allow. To support these efforts, visit <a href="https://www.newberry.org/give">Give to the Newberry</a>.
                                </p>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Create Account">
                            <div id="create-account">
                                <p>
                                    While you’re welcome to use NDC without registering, you have the option to register for a user account in order to easily bookmark and share favorite items. 
                                </p>
                                <p>
                                    To sign up, use the link at the top right of the screen, click the “Sign up” button, and fill out the registration form. 
                                    
                                </p>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Save Favorites">
                            <div id="favs">
                                <p >
                                    Once you’re signed in, you’ll see a new menu option at the top right: My Collections, where you can save different sets of favorites.

                                </p>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                                <p class="instructions">
                                    To create a collection, click the “Add to Collection” button under any NDC item:
                                </p>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                                <p class="instructions">
                                    This will open a pop-up window, where you’ll be prompted to add the item to a new or existing collection:
                                </p>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                                <p class="instructions">
                                    View your saved items by clicking “My Collections” at the top right screen; from there, you can invite others to view and/or edit your collection via “Manage Collaborators”, or create a URL accessible to anyone with the “Share” option.
                                </p>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Search Tips">
                            <div id="search-browse">
                                <p>
                                    The NDC home page offers three paths into the collections: use the search box at the upper right if you know what you're looking for; click the Browse All button if you want to see everything that's available; or select one of the tiles in the Explore section to browse specific formats or subject areas. 
                                </p>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                                <div id="refine">
                                    <h4>Refine with filters</h4>
                                    <p>
                                        Once you have a set of results, you can further refine your query using the filters side panel at the left of the screen. The side panel is a dynamic list of headings that changes depending on the attributes of your results.Check the boxes to narrow results by broad Type, specific Format, Creator, Subject, etc. Each time you choose a term, you’ll see the search results refresh to include only those that match the criteria you’ve selected. To undo a filter selection, click the box again to uncheck it, or use the “clear all” symbol 🚫 at the top of each facet.
                                    </p>
                                    <div class="placeholder">PLACEHOLDER IMAGE</div>
                                </div>
                                <div id="customize">
                                    <h4>Customize results with View &amp; Sort menu</h4>
                                    <p>
                                        The View & Sort menu allows you to change the display of items on the results page. Click the button located immediately above your results will launch a pop-up menu with the following categories:
                                    </p>
                                    <dl>
                                        <dt class="inline-title">View:</dt> 
                                        <dd class="inline-dd">Manage how items display.</dd>
                                        <br />
                                        <dt class="inline-title">Sort:</dt> 
                                        <dd class="inline-dd">Manage the order in which item display.</dd>
                                        <br />
                                        <dt class="inline-title">Count:</dt> 
                                        <dd class="inline-dd">Manage the number of items that display per page. The higher the count, the longer it may take for the page to load.</dd>
                                    </dl>
                                    <div class="placeholder">PLACEHOLDER IMAGE</div>
                                    <div class="placeholder">PLACEHOLDER IMAGE</div>
                                    <p>
                                        To restore the original settings, select the “reset to default” option in the lower left corner.
                                    </p>
                                </div>
                                <div id="mods">
                                    <h4>Modifiers and wildcards</h4>
                                    <dl class="grid-container">
                                        <dt class="grid-item">AND</dt>
                                        <dd class="grid-item">search for all values entered in the Search Bar. </dd>
                                        <div></div>
                                        <dd class="grid-item"><em>example: </em> postcards AND beaches</dd>
                                        <dt class="grid-item">NOT</dt>
                                        <dd class="grid-item">exclude certain values. </dd>
                                        <div></div>
                                        <dd class="grid-item"><em>example: </em> books NOT directories</dd>
                                        <dt class="grid-item">OR</dt>
                                        <dd class="grid-item">broaden your search to include any of the terms. </dd>
                                        <div></div>
                                        <dd class="grid-item"><em>example: </em> greeting cards OR valentines</dd>
                                        <dt class="grid-item">( )</dt>
                                        <dd class="grid-item">when using multiple modifiers, parentheses specify the order in which they’re executed.</dd>
                                        <div></div>
                                        <dd class="grid-item"><em>example: </em> (maps OR atlases) NOT guidebooks</dd>
                                        <dt class="grid-item">“ “</dt>
                                        <dd class="grid-item">quotation marks allow exact searching of a phrase.</dd>
                                        <div></div>
                                        <dd class="grid-item"><em>example: </em> “commonplace book”</dd>
                                        <dt class="grid-item">*</dt>
                                        <dd class="grid-item">the asterisk broadens search by substituting for multiple characters.</dd>
                                        <div></div>
                                        <dd class="grid-item"><em>example: </em> snow* – retrieves results with the values snow, snowflake, snowstorm, etc. </dd>
                                        <dt class="grid-item">?</dt>
                                        <dd class="grid-item">the question mark broadens search by substituting for a single character</dd>
                                        <div></div>
                                        <dd class="grid-item"><em>example: </em> organi?ation – retrieves results with the values organization and organisation</dd>
                                    </dl>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Share">
                            <div id="share">
                                <p>The Newberry seeks to make its collection as freely accessible and shareable as possible, in support of our mission to inspire research and learning in the humanities.
                                </p>
                                <div id="urls">
                                    <h4>Persistent URLs</h4>
                                    <p>
                                        In order to <span class="bold">share an item</span>, you can create a persistent URL using the “Copy permanent link” button immediately below the viewer panel. Do not use the browser URL; it will just redirect to the Browse All results screen.
                                    </p>
                                    <div class="placeholder">PLACEHOLDER IMAGE</div>
                                    <p>

                                        In order to <span class="bold"> share a set of results</span>, use the browser URL; this will create a permanent link for re-use.
                                    </p>
                                    <div class="placeholder">PLACEHOLDER IMAGE</div>
                                </div>
                                <div id="cite">
                                    <h4>Citations</h4>
                                    <p>
                                        The Newberry makes its collections available for any lawful purpose, commercial or non-commercial, without licensing or permission fees to the library, subject to the <a href="https://www.newberry.org/rights-and-reproductions">terms and conditions outlined here</a>. While it’s not required, we would appreciate the inclusion of the credit “Newberry Library” and a link to the item in the digital collection when repurposing. Tracking such use helps us justify and prioritize future digitization projects.
                                    </p>
                                </div>
                                <!-- <div id="social-media">
                                    <h4>Social media</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ducimus similique quo in odio ipsum ipsa minus voluptatibus quidem praesentium commodi adipisci cumque enim rerum, tempora id, laudantium eum.
                                    </p>
                                </div> -->
                            </div>

                        </AccordionItem>
                        <AccordionItem title="Download">
                            <div id="download">
                                <p>
                                    There are numerous ways to download content from NDC.From the item view, use the Download button; from the browse view, hover on the item’s thumbnail and click the Download icon. To download multiple items at once, select two or more from the browse view by clicking the checkbox on the browse thumbnail; this will cause a menu to appear at the bottom of the page that includes a download option at lower right.
                                </p>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                                <p>
                                    Selecting any of these options will open a pop-up menu with three sections:
                                </p>
                                <dl class="grid-container-withimgs">
                                    <dt class="grid-item">Stacked assets:</dt>
                                    <dd class="grid-item"> When your item consists of multiple files (e.g. a postcard with front and back images; a book with page images; etc.), the default setting is to download all files. The “Images” section will let you know the number of files in the set. (To download a subset of files in the set, see below.) </dd>
                                </dl>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>

                                <dl class="grid-container-withimgs">
                                    <dt class="grid-item">Requestor status & use:</dt> 
                                    <dd class="grid-item">Please choose the best fit from the menu options.</dd>
                                </dl>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                                <dl class="grid-container-withimgs">
                                    <dt class="grid-item">Image format:</dt> 
                                    <dd class="grid-item">Select from medium resolution jpegs or a highest-resolution tiff file</dd>
                                </dl>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                                <p>When you don’t want to download an entire set, e.g. only a few pages from this 302-page manuscript object</p>
                                <div class="placeholder">PLACEHOLDER IMAGE</div>
                                <p>Locate a page you’re interested in, then right-click on the image and select “View page details”.</p>
                            </div>

                        </AccordionItem>
                        <AccordionItem title="Use &amp; Permissions">
                            <div id="permissions">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum quod quibusdam? Ea mollitia tempora deserunt necessitatibus aspernatur voluptas harum ad architecto unde quam nobis aperiam, autem accusamus laudantium! Perferendis.  
                                </p>
                            </div>

                        </AccordionItem>
                        <AccordionItem title="FAQs">
                            <div id="faqs">
                                <dl>
                                    <dt>
                                        question 1
                                    </dt>
                                    <dd>
                                        answer 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint nobis quaerat accusamus iusto incidunt obcaecati ab, porro, magnam vero hic illo! Tempora, libero vero. Vero aspernatur nihil repellendus nisi!
                                    </dd>
                                    <dt>question 2</dt>
                                    <dd>
                                        answer 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio hic, laboriosam iusto eligendi molestias eveniet adipisci perspiciatis dicta labore voluptatibus suscipit! Aliquid commodi ex amet alias, repellat maxime error?
                                    </dd>
                                    <dt>question 3</dt>
                                    <dd>
                                        answer 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ut, fugit distinctio voluptas, ipsam corporis inventore nostrum quam odio praesentium impedit. Qui recusandae atque ipsa id, sunt eligendi nobis nesciunt.
                                    </dd>
                                </dl>
                            </div>

                        </AccordionItem>
                        <AccordionItem title="Contact Us">
                            <div id="contact">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eaque debitis unde possimus ab iste ipsa magnam velit quibusdam pariatur recusandae omnis atque deleniti id mollitia, amet et. Facere, placeat.
                                </p>
                            </div>
                        </AccordionItem>
            </Accordion>
        </div>
            </Column>
        </Row>
    </Grid>
</Content>
  
<style>
    .grid-container, .grid-container-withimgs {
        display: grid;
        padding: 10px;
    }
    .grid-container {
        grid-template-columns: 70px auto ;
    }
    .grid-container-withimgs {

        grid-template-columns: 200px auto ;
    }
    .bold {
        font-weight: bold;
    }
    .placeholder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-transform: uppercase !important;
        font-size: 20px !important;
        font-family:'Styrene B Bold' !important;
        width: 500px;
        height: 300px;
        color: var(--colorZero);
        background: repeating-linear-gradient(
            120deg,
            var(--colorOne),
            var(--colorOne) 40px,
            var(--colorTwo) 40px,
            var(--colorTwo) 80px
        );
        text-align: center;
        margin: 15px auto;
        border: 1px solid rgba(0,0,0,1) !important;
    }
    .instructions {
        width: 60%;
        min-width: 500px;
        margin: auto;
    }
    .grid {
        color: transparent;
        margin: 10px;
        display: grid;
        grid-template-columns: 40px 40px 40px;
        gap: 5px;
    }
    .grid-item-color {
        height: 40px;
        transition: 0.2s;
        border: 1px solid rgba(0,0,0,1);
    }
    .grid-trio {
        color: transparent;
        margin: 10px;
        display: grid;
        grid-template-columns: 120px;
        gap: 5px;
    }
    .grid-trio-item{
        box-sizing: border-box;
        height: 40px;
        transition: 0.2s;
        border: 1px solid rgba(0,0,0,1);
    }
    .wrappper {
        display: flex;
        justify-content: center;
        position: relative;
    }
    .grid-trio-item:hover, .grid-item-color:hover {
        border: 1px solid black;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, 
                    rgba(0, 0, 0, 0.45) 0px 0px 5px inset;
    }
    .color-name {
        flex-basis: 20vw;
        text-transform: capitalize;
        text-align: center;
    }
    .main-content {
        width: 80%;
        margin: auto;
    }
    .main-content div {
        padding: 15px 0 0 0;
        scroll-margin-top: 120px;
    }
    .main-content dl, .main-content div>div{
        padding-left: 20px;
    }
    .main-content h3, .main-content dt {
        font-size: 24px;
    }
    .main-content dd {
        font-size: 16px;
    }
    .main-content dt, .main-content dd {
        padding-top: 10px;
    }
</style>