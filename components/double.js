import Image from 'next/image';

export default function Double() {
  return (
    <>
      <div id='event-pic' className='about-item'>
        <Image
          src='/images/pig-were-back.jpg'
          alt="Pig holding a sign that says We're Back"
          height='612'
          width='612'
          //   unsized={true}
        />
      </div>
      <div id='event-text' className='about-item about-text'>
        <p>
          <h3 className='light-text'>FRASERS DINE IN IS BACK!</h3>
          <h4>
            OUR DINING ROOM IS OPEN FOR SERVICE. RESERVATIONS ARE RECOMMENDED.
            CALL TO PLACE A TAKEOUT ORDER.
          </h4>
        </p>
        <p className='light-text'>
          There are many guidelines for us to follow as well as guidelines for
          our customers to follow. Face masks will be mandatory for entry to the
          restaurant. Additonal safety precautions and requirements will be
          posted. We appreciate your cooperation in this endeavor to help us
          keep our customers and staff safe.
        </p>
      </div>

      <div id='about-pic' className='about-item'>
        <Image
          src='/images/frasers-enter-dining-room.jpg'
          alt='Frasers gourmet hideaway dining room'
          height='612'
          width='612'
          //   unsized={true}
        />
      </div>

      <div id='about-text' className='about-item about-text'>
        <p>
          <h3 className='light-text'>FRASERS GOURMET HIDEAWAY</h3>
          is owned and operated by Chef Scott Fraser. Inside the rightly named
          gourmet hideaway, guests will notice a relaxing environment where food
          and drinks are the focal point. Come enjoy a seasonal menu of the
          freshest local Northwest ingredients. Pair this with a vibrant West
          Coast wine, handcrafted cocktail, or a nice cold beer.
        </p>
      </div>
      <div id='scott-pic' className='about-item'>
        <Image
          src='/images/scott_fraser_square.jpg'
          alt='Scott Fraser holding a large salmon'
          height='612'
          width='612'
          //   unsized={true}
        />
      </div>

      <div id='scott-text' className='about-item about-text'>
        <p>
          <h3 className='light-text'>CHEF SCOTT FRASER</h3>
          is a Pierre Dubrulle Culinary School graduate and understands the
          importance of food. After graduating he spent years honing his skills
          working at the finest French restaurants in Vancouver, BC. For the
          past 30 years, he has worked to establish Frasers Gourmet Hideaway as
          not only a hometown favorite, but a culinary destination in the
          Pacific Northwest for steaks, seafood, and more served with a creative
          palate.
        </p>
      </div>
      <style jsx>{`
        .about-text {
          /* padding-top: 4rem; */
        }
        .about-item {
          margin: 0 10% 0;
          text-align: left;
        }

        .about-item > img {
          padding-top: 4rem;
          object-fit: cover;
          width: 100%;
          max-height: 100%;
        }
        #happy-hour-pic {
          grid-area: p1;
        }

        #happy-hour-text {
          grid-area: t1;
        }

        #event-pic {
          grid-area: p2;
        }

        #event-text {
          grid-area: t2;
        }

        #about-pic {
          grid-area: p3;
        }

        #about-text {
          grid-area: t3;
        }

        #scott-pic {
          grid-area: p4;
        }

        #scott-text {
          grid-area: t4;
        }

        @media (min-width: 460px) {
          .about-text {
            padding-top: 4rem;
          }
          .about-item {
            margin: 5vh 2vw;
          }
        }
      `}</style>
    </>
  );
}
