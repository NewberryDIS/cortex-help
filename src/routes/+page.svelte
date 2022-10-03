<script>
    export const prerender = true
    import { browser } from '$app/environment';

    import '../styles/fonts.css';
    import '../styles/globals.css';
    import '../styles/overrides.css';

    import Header from '../lib/Header.svelte'
    import Nogo from '../lib/Nogo.svelte'
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
            // document !== undefined && document.documentElement.style.setProperty(
            //     "--colorZero",
            //     colorways[colorNumber][0]
            // );
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
    const switchColorSwitchType = (type) => {
        console.log(type)
        colorSwitchType = type
    }
    let hoverWay = ''
    let hoverColor = ''
</script>
<Header {nogoColor} />


<Content>
    <Grid>
        <Row>
            <Column>
                <Accordion>
                    <AccordionItem title="Color Picker">
                        <div class="wrappper">
                            <ul class="grid-trio">
                                {#each colorways as way, i}
                                    <li title={way[3]} on:mouseenter={() => hoverColor = way[3]} on:mouseleave={() => hoverColor=''} class="grid-trio-item" style={`background: linear-gradient(90deg, ${way[0]} 0%, ${way[0]} 33%, ${way[1]} 33%, ${way[1]} 66%, ${way[2]} 66%, ${way[2]} 100%);`} on:click={() => colorSwitcher(i)}>{i} </li>
                                {/each}
                                </ul>
                                <p class="color-name">{hoverColor}</p>
                                <div class="wrapper">
                                <Dropdown
                                    hideLabel
                                    bind:selectedId={colorSwitchType}
                                    items={[
                                        { id: "text" },
                                        { id: "left" },
                                        { id: "right" },
                                    ]}
                                    />
                                <ul class="grid">
                                    {#each collors as color, i}
                                        <li on:mouseenter={() => hoverColor = color[0]} on:mouseleave={() => hoverColor=''} title={color[0]} class="grid-item" style={`color: ${color[1]}; background-color: ${color[1]}`} on:click={() => singleColorSwitcher(color[1])}>{i}</li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>
                            <div class="main-content">
                                <div id="about">
                                    <h2>
                                        About this site
                                    </h2>
                                    <p>
                                        Welcome to Newberry Digital Collections! This site features thousands of digitized manuscripts, maps, books, photographs, artworks, audio and video recordings, and other rare and unique materials from the collections of the Newberry, Chicago's independent research library since 1887. The content here represents only a fraction of the library's vast holdings; materials are continuously digitized and made freely available online as resources allow. To support these efforts, visit <a href="https://www.newberry.org/give">Give to the Newberry</a>.
                                    </p>
                                </div>
                                <div id="create-account">
                                    <h2>
                                        Create account
                                    </h2>
                                    <p>
                                        While you’re welcome to use NDC without registering, you have the option to register for a user account in order to easily bookmark and share favorite items. 
                                    </p>
                                    <p>
                                        To sign up, use the link at the top right of the screen, click the “Sign up” button, and fill out the registration form. 
                                        
                                    </p>
                                </div>
                                <div id="favs">
                                    <h2>
                                        Save favorites
                                    </h2>
                                    <div class="instructions">
                                        <p>
                                            Once you’re signed in, you’ll see a new menu option at the top right: My Collections, where you can save different sets of favorites.

                                        </p>
                                        <div class="placeholder">PLACEHOLDER IMAGE</div>
                                        <p>
                                            To create a collection, click the “Add to Collection” button under any NDC item:
                                        </p>
                                        <div class="placeholder">PLACEHOLDER IMAGE</div>
                                        <p>
                                            This will open a pop-up window, where you’ll be prompted to add the item to a new or existing collection:
                                        </p>
                                        <div class="placeholder">PLACEHOLDER IMAGE</div>
                                        <p>
                                            View your saved items by clicking “My Collections” at the top right screen; from there, you can invite others to view and/or edit your collection via “Manage Collaborators”, or create a URL accessible to anyone with the “Share” option.
                                        </p>
                                        <div class="placeholder">PLACEHOLDER IMAGE</div>
                                    </div>
                                </div>
                                <div id="search-browse">
                                    <h2>Search Tips</h2>
                                    <p>
                                        The NDC home page offers three paths into the collections: use the search box at the upper right if you know what you're looking for; click the Browse All button if you want to see everything that's available; or select one of the tiles in the Explore section to browse specific formats or subject areas. 
                                    </p>
                                    
                                    <div class="placeholder">PLACEHOLDER IMAGE</div>
                                    <div id="refine">
                                        <h3>Refine with filters</h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam dignissimos sit ipsa iure, facilis cupiditate provident facere eaque iste reprehenderit. Ad quaerat quia iste enim molestias, neque repudiandae. Error!
                                        </p>
                                    </div>
                                    <div id="customize">
                                        <h3>Customize results with View &amp; Sort menu</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore, reprehenderit non obcaecati quae suscipit ullam perferendis aspernatur quos tempora esse voluptas ex molestias numquam voluptates labore necessitatibus rem quasi?
                                        </p>
                                    </div>
                                    <div id="mods">
                                        <h3>Modifiers and wildcards</h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam, velit unde quasi autem saepe blanditiis nesciunt quaerat voluptas aliquam ut illum, incidunt aliquid tenetur? Expedita quas perspiciatis deleniti illo.
                                        </p>
                                    </div>
                                </div>
                                <div id="share">
                                    <h2>Share</h2>
                                    <div id="urls">
                                        <h3>Persistent URLs</h3>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto mollitia eum dignissimos repudiandae earum tempora ullam molestiae. Beatae doloremque explicabo illum in tempora, doloribus molestias deserunt voluptatum qui officiis nemo!
                                        </p>
                                    </div>
                                    <div id="cite">
                                        <h3>Citations</h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil similique dignissimos id pariatur facilis, nesciunt natus dolor quaerat quibusdam in, ipsa est placeat mollitia itaque eius labore vero. Tempora, doloremque?
                                        </p>
                                    </div>
                                    <div id="social-media">
                                        <h3>Social media</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ducimus similique quo in odio ipsum ipsa minus voluptatibus quidem praesentium commodi adipisci cumque enim rerum, tempora id, laudantium eum.
                                        </p>
                                    </div>
                                </div>
                                <div id="download">
                                    <h2>Download</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis veritatis voluptates dicta quae eius veniam sit, ratione molestias itaque omnis accusamus corporis atque blanditiis. Illum saepe quae alias aperiam.
                                    </p>
                                </div>
                                <div id="permissions">
                                    <h2>Use &amp; permissions</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum quod quibusdam? Ea mollitia tempora deserunt necessitatibus aspernatur voluptas harum ad architecto unde quam nobis aperiam, autem accusamus laudantium! Perferendis.  
                                    </p>
                                </div>
                                <div id="faqs">
                                    <h2>FAQs</h2>
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
                                <div id="contact">
                                    <h2>Contact us</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eaque debitis unde possimus ab iste ipsa magnam velit quibusdam pariatur recusandae omnis atque deleniti id mollitia, amet et. Facere, placeat.
                                    </p>
                                </div>
                            </div>
            </Column>
        </Row>
    </Grid>
</Content>
  


<style>
    .placeholder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 500px;
        height: 300px;
        color: white;
        background: repeating-linear-gradient(
            45deg,
            #606dbc,
            #606dbc 10px,
            #465298 10px,
            #465298 20px
        );
        text-align: center;
        margin: 15px auto;
    }
    .instructions {
        width: 50%;
        margin: auto;
    }
    .grid {
        color: transparent;
        margin: 10px;
        display: grid;
        grid-template-columns: 40px 40px 40px;
        gap: 5px;
    }
    .grid-item {
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
    .grid-trio-item:hover, .grid-item:hover {
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