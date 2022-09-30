<script>
    export const prerender = true
    import { browser } from '$app/environment';
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
        "#4051a3",
        "#20543e",
        "#111a2a",
        "#eaebe7",
        "#7ec4e2",
        "#eadcc9",
        "#ad285a",
        "#925840",
        "#f16151",
        "#cdb8d1",
        "#8786b6",
        "#c28892",
        "#e3a99e",
        "#927a9c"
    ]
    const colorways = [
        [colors.mulberry, colors.saphlav, colors.lavender],
        [colors.mulberry, colors.sandmul, colors.sand],
        [colors.mulberry, colors.lakemul, colors.lake],
        [colors.sapphire, colors.lake, colors.granite],
        [colors.sapphire, colors.saphlav, colors.lavender],
        [colors.sapphire, colors.lavender, colors.granite],
        [colors.sand, colors.flame, colors.tile],
        [colors.granite, colors.mulberry, colors.flame],
        [colors.midnight, colors.flame, colors.granite],

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
                                    <li class="grid-trio-item" style={`background: linear-gradient(90deg, ${way[0]} 0%, ${way[0]} 33%, ${way[1]} 33%, ${way[1]} 66%, ${way[2]} 66%, ${way[2]} 100%);`} on:click={() => colorSwitcher(i)}>{i} </li>
                                {/each}
                                </ul>
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
                                        <li class="grid-item" style={`color: ${color}; background-color: ${color}`} on:click={() => singleColorSwitcher(color)}>{i}</li>
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
                    <div class="create-account">
                        <h2>
                            Create account
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias tenetur, numquam fuga dicta atque, necessitatibus dignissimos ut consequatur ipsa quas libero expedita officia. Provident architecto maiores ad fugiat, facere quae.
                        </p>
                    </div>
                    <div class="search-tips">
                        <h2>Search Tips</h2>
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
                    <div class="share">
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
        justify-content: space-evenly;
    }
    .grid-trio-item:hover, .grid-item:hover {
        border: 1px solid black;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, 
                    rgba(0, 0, 0, 0.45) 0px 0px 5px inset;
    }
    @font-face {
        font-family: 'Flecha M Medium';
        font-style: normal;
        src: url('FlechaM-Medium.woff') format('woff');
    }
    /* overrides */
    :global(.bx--header) {
        height: 120px !important;
        background-color: rgba(0,0,0,0);
        background: linear-gradient(120deg, var(--colorOne) 0px, var(--colorOne) 300px, var(--colorTwo) 300px, var(--colorTwo) 100%) !important;
        /* background: linear-gradient(120deg, rgba(135,134,182,1) 0px, rgba(135,134,182,1) 300px, rgba(205,184,209,1) 300px, rgba(205,184,209,1) 100%) !important; */
	}
    :global(.bx--header__name){
        display: none !important;
        /* width: 20px !important; */
    }
    :global(.bx--header~.bx--side-nav) {
        top: 120px;
    }
    :global(.bx--header~.bx--content){
        margin-top: 130px;
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