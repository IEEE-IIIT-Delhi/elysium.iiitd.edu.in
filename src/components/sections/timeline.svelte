<script>
  import { Remarkable } from 'remarkable'
  import { slide } from 'svelte/transition'
  import { wait } from '../../utils'
  import rawTimeline from '../../../data/timeline.yml'

  import Section from '../section.svelte'
  import Chevron from '../icons/chevron.svelte'

  // add 'expand' property to each node
  const timeline = rawTimeline.map(node => {
    node.expand = false
    return node
  })

  let nodesToDisplay = 5
  let nodeList
  let timelineEl
  let collapse = false
  let buttonText = 'Show more'

  const md = new Remarkable()

  $: nodeList = timeline.slice(0, nodesToDisplay)
  $: collapse = nodesToDisplay >= timeline.length
  $: buttonText = collapse ? 'Collapse' : 'Show more'

  async function nodesToggleHander () {
    if (collapse) {
      nodesToDisplay = 5
      await wait(400)
      timelineEl.scrollIntoView({
        behavior: 'smooth'
      })
    } else {
      nodesToDisplay += 5
    }
  }
</script>

<Section id={'timeline'} heading={'Timeline'} bind:sectionElement={timelineEl}>
  <div class="timeline">
    {#each nodeList as node}
      <div class="node hover-highlight safari-overflow-fix" transition:slide={{ duration: 200 }}>
        <div class="info">
          <time>{node.date || '-'}</time>
          <h3>{node.name}</h3>
          {#if node.organiser}
            <p class="club"><span>by </span>{node.organiser}</p>
          {/if}
          <p class="description">{node.description}</p>

          <div class="clickables">
            <a href="{node.registration}" target="_blank" rel="noopener">Register</a>

            <button
              class='details hover-highlight focus-highlight'
              on:click={() => node.expand = !node.expand}
            >
              Details
              <Chevron open={node.expand}/>
            </button>
          </div>

          {#if node.expand}
            <div class="details safari-overflow-fix" transition:slide={{ duration: 300 }}>
              <p><strong>Time: </strong>{node.time}</p>
              {@html md.render(node.details)}
            </div>
          {/if}
        </div>

        <div class="border">
          <div class="point"></div>
          <div class="line"></div>
        </div>

        <div class="spacer"></div>
      </div>
    {/each}

    <div class="show-more">
      <button class='hover-highlight focus-highlight' on:click={nodesToggleHander}>
        {buttonText}
        <Chevron strokeColor='#8a909a' open={collapse}/>
      </button>
    </div>
  </div>
</Section>

<style lang="scss">
  .timeline {
    padding-top: 20px;
    overflow: hidden;
  }

  .node {
    margin: 20px 0;
    display: flex;
    justify-content: center;

    &:nth-child(odd) {
      .info {
        text-align: right;
        align-items: flex-end;
      }
    }

    &:nth-child(even) {
      flex-flow: row-reverse;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: 0.2s all ease-in-out;
      overflow: hidden;

      time {
        font-size: 0.9rem;
        color: #038876;
        font-weight: 600;
      }

      h3 {
        margin-top: 10px;
        font-size: 1.2rem;
        color: #8ba6d6;
        font-weight: 600;
        text-shadow: 0 0 20px rgba(98,131,191,.52);
      }

      p {
        font-size: 0.9rem;
        line-height: 1.7;
        letter-spacing: 0;

        &.club {
          color: #8ba6d080;
          margin-top: 5px;

          span {
            font-style: italic;
          }
        }

        &.description {
          color: #a9acb2;
          margin-top: 10px;
        }
      }

      div.details {
        :global(*) {
          font-size: 0.9rem;
          line-height: 1.7;
          letter-spacing: 0;
          color: #a9acb2;
          margin-top: 10px;
          font-size: 14px;
        }

        :global(li) {
          list-style: circle outside;
          margin-left: 20px;
        }
      }

      .clickables {
        display: flex;

        a {
          margin-right: 10px;
        }

        * {
          display: flex;
          background: none;
          border: 1px solid #062431;
          color: #12baa3;
          padding: 5px 10px;
          margin-top: 10px;
          border-radius: 5px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          outline: none;
          font-family: Inter;
          font-size: 13.5px;
          letter-spacing: 0;
          text-decoration: none;
          transition: 0.2s all ease-in-out;

          :global(svg) {
            height: 20px;
            margin: 0px -10px 0 0px;
            stroke: #038473;
          }

          &:hover,
          &:focus {
            background: #062431;
          }
        }
      }
    }

    .info, .spacer {
      flex: 1;
      padding: 0 20px;
    }

    .border {
      display: flex;
      flex-direction: column;
      align-items: center;

      * {
        transition: 0.1s all linear;
      }

      .point {
        border-radius: 50%;
        height: 15px;
        width: 15px;
        border: 2px solid #356f89;
        margin: 2.5px 0 10px;
      }

      .line {
        flex: 1;
        width: 5px;
        background: #062431;
        border-radius: 10px;
      }
    }

    &:hover {
      .point {
        background: #356f89;
      }

      .line {
        background: #214961;
      }

      .info {
        transform: translateY(-2.5px);
      }
    }

    @media only screen and (max-width: 800px) {
      flex-flow: row-reverse !important;

      .info {
        text-align: left !important;
        align-items: start !important;
        transform: none !important;
        padding: 0 0 0 20px;
        flex: 1;
      }

      .spacer {
        display: none;
      }
    }
  }

  .show-more {
    display: flex;
    justify-content: center;
    margin-top: 5vh;

    button {
      border: none;
      font-size: 1rem;
      color: #eeeeee94;
      font-family: Inter;
      display: flex;
      font-weight: 400;
      background: #0b182f;
      padding: 10px 20px;
      border-radius: 10px;
      align-items: center;
      transition: 0.1s all ease-in-out;
      cursor: pointer;
      outline: none;

      :global(svg) {
        margin-left: 10px;
        margin-right: -10px;
      }

      &:hover,
      &:focus {
        box-shadow: 0 5px 10px rgba(0,0,0,.2);
      }
    }
  }
</style>
