<script>
    import { browser } from '$app/environment';
    import Header from '../lib/Header.svelte'
    import Nogo from '../lib/Nogo.svelte'
    import {
      Content,
      Grid,
      Row,
      Column,
	  Button,
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

    let colorSwitchType = 'text'
    let nogoColor = colors.mulberry
    const colorSwitcher = (colorNumber) => {
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
    const singleColorSwitcher = (color) => {
        console.log(which + color)
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
    const switchColorSwitchType =(type)=> {
        colorSwitchType = type
    }
</script>
<Header colors={colors} {nogoColor} />


<Content>
    <Grid>
      <Row>
        <Column>
            <div class="wrappper">
                <div class="wrapper">
                    {#each colorways as way, i}
                    <div class="colorboxes" on:click={() => colorSwitcher(i)}>
                        <div class="colorbox" style={`color: ${way[0]}; background-color: ${way[0]};`}>color</div>
                        <div class="colorbox" style={`color: ${way[1]}; background-color: ${way[1]};`}>color</div>
                        <div class="colorbox" style={`color: ${way[2]}; background-color: ${way[2]};`}>color</div>
                    </div>
                    {/each}
                </div>
                <div class="wrapper">
                    <div class="">
                        <Button on:click={() => switchColorSwitchType("text")} >Text</Button>
                        <Button on:click={() => switchColorSwitchType("text")} >Left</Button>
                        <Button on:click={() => switchColorSwitchType("text")} >Right</Button>
                        <ul>
                            {#each collors as color}
                                <li style={`color: ${color}; background-color: ${color}`} on:click={() => singleColorSwitcher(color)}>{color}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </Column>
      </Row>
    </Grid>
  </Content>
  


<style>
    .colortitle {
        height: 15px !important;
    }
    .textcolor li {
        /* flex: 1; */
        height: 50px;
        margin: 2px;
        width: 75px;
    }
    .textcolor {
        display: flex;
        flex: 1;
        width: 100%;
    }
    .textcolor ul {
        display: flex;
        flex-direction: column;
        height: 75vh;
    }
    .wrappper {
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
    }
    .wrapper {
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .colorboxes {
        width: 300px;
        height: 50px;
        display: flex;
        padding: 10px;
        transition: 0.3s;

    }
    .colorboxes:hover {
        background-color: #eee;
    }
    .colorbox {
        flex: 1;
    }

    h1 {
        font-family: 'Flecha M Medium';
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
</style>