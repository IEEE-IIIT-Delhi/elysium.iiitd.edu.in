<script>
  import contacts from '../../../data/contacts.yml'
  import Section from '../section.svelte'
</script>

<Section id={'contact'} heading={'Contact'} >
  <p>Elysium is being hosted by the IEEE Chapter of <a href='https://iiitd.ac.in' target='_blank' rel='noopener'>Indraprastha Institute of Information Technology, Delhi</a>. Get to know more about us at <a href='http://ieee.iiitd.edu.in' target='_blank' rel='noopener'>ieee.iiitd.edu.in</a>.</p>
  <p>The fastest way to reach us is by contacting any of the following admins on their Instagram DMs.</p>

  <div class="gallery">
    {#each contacts as contact}
      <div class="contact">
        <img src={contact.image} alt="{contact.name} photo">
        <h3>{contact.name}</h3>
        <h4>{contact.post}</h4>
        <p><span>Phone:</span> <a href="tel:{contact.phone}">{contact.phone}</a></p>
        <p><span>Email:</span> <a href="mailto:{contact.email}">{contact.email}</a></p>
        <p><span>Instagram:</span> <a href="https://instagram.com/{contact.instagram}" target='_blank' rel='noopener'>{contact.instagram}</a></p>
      </div>
    {/each}
  </div>
</Section>

<style lang="scss">
  p {
    margin-top: 20px;
    line-height: 1.7;
    font-size: 1.1rem;
    color: #a9acb2;
    letter-spacing: 0;
  }

  a {
    text-decoration: none;
    color: #038876;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    margin: 2vh -3vh;

    .contact {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 3vh;
      flex: 1;

      img {
        height: 150px;
        border-radius: 10px;
        margin-bottom: 30px;
      }

      h3 {
        font-size: 1.3rem;
        font-weight: 900;
        color: #4271a7;
        margin-bottom: 10px;
      }

      h4 {
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 10px;
        letter-spacing: 1px;
        color: #eee9;
      }

      p {
        margin-top: 5px;

        span {
          font-weight: 600;
          color: #6b717d;
        }
      }
    }
  }
</style>
