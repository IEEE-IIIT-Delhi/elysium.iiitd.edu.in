<script>
  import contacts from '../../../data/contacts.yml'

  import Section from '../section.svelte'
  import Image from '../image.svelte'

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/ieeeiiitdelhi/',
      image: '/images/social/instagram.svg'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ieeeiiitd/',
      image: '/images/social/facebook.svg'
    },
    {
      name: 'Twitter',
      href: 'https:/twitter.com/ieee_d/',
      image: '/images/social/twitter.svg'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ieee-iiitd/',
      image: '/images/social/linkedin.svg'
    }
  ]
</script>

<Section id={'contact'} heading={'Contact'} >
  <p>Elysium is being hosted by the IEEE Chapter of <a href='https://iiitd.ac.in' target='_blank' rel='noopener'>Indraprastha Institute of Information Technology, Delhi</a>. Get to know more about us at <a href='https://ieee.iiitd.edu.in' target='_blank' rel='noopener'>ieee.iiitd.edu.in</a>.</p>
  <p>The fastest way to reach us is by contacting any of the following admins on their Instagram DMs. You can also <a href="https://instagram.com/elysium.iiitd" target="_blank" rel="noopener">follow us on Instagram</a>.</p>

  <div class="gallery">
    {#each contacts as contact}
      <div class="contact hover-highlight">
        <Image src={contact.image} alt="{contact.name} photo" />
        <h3>{contact.name}</h3>
        <h4>{contact.post}</h4>
        <p><strong>Phone:</strong> <a href="tel:{contact.phone}">{contact.phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:{contact.email}">{contact.email}</a></p>
        <p><strong>Instagram:</strong> <a href="https://instagram.com/{contact.instagram}" target='_blank' rel='noopener'>{contact.instagram}</a></p>
      </div>
    {/each}
  </div>

  <div class="social">
    <h3>IEEE, IIIT Delhi is on</h3>
    <ul>
      {#each socialLinks as link}
        <li class='hover-highlight'>
          <a href={link.href} target="_blank" rel="noopener">
            <img src="{link.image}" alt="{link.name} Logo">
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
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
      white-space: nowrap;

      :global(img) {
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
        font-size: 0.9rem;
        font-weight: 300;
        margin-bottom: 10px;
        letter-spacing: 1px;
        color: #eee9;
      }

      p {
        margin-top: 5px;

        strong {
          color: #6b717d;
        }
      }
    }
  }

  .social {
    h3 {
      letter-spacing: 0.5px;
      font-weight: 600;
      color: #4271a7;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 20px -20px 0;

      li {
        list-style-type: none;
        margin: 10px 20px;

        a {
          display: flex;
          align-items: center;
          color: inherit;

          &:hover {
            img {
              opacity: 1;
            }
          }
        }

        img {
          height: 20px;
          margin-right: 10px;
          opacity: 0.5;
          transition: 0.1s all ease-in-out;
        }
      }
    }
  }
</style>
