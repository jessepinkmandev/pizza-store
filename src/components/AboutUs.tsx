const styles = {
  about: `my-8 text-3xl `,
  cards: `md: max-w-[300px] md:mx-auto`,
};

const AboutUs = () => {
  return (
    <div className=" grid place-content-center bg-[#EF5A6F] text-[#D4BDAC] text-xl  text-center pb-8 px-8 space-y-12 lg:flex lg:text-base lg:space-y-0 my-12 ">
      <div className={styles.cards}>
        <div className={styles.about}>Fresh Dough</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          interdum nunc. Aenean nunc diam, iaculis at leo vel, venenatis
          hendrerit diam. Proin porttitor eget tortor eget vulputate.
          Suspendisse mattis nisi non dui sollicitudin vulputate. Phasellus
          vestibulum vehicula pellentesque. Integer non augue scelerisque,
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.about}>Sourced vegetables</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          interdum nunc. Aenean nunc diam, iaculis at leo vel, venenatis
          hendrerit diam. Proin porttitor eget tortor eget vulputate.
          Suspendisse mattis nisi non dui sollicitudin vulputate. Phasellus
          vestibulum vehicula pellentesque. Integer non augue scelerisque,
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.about}>Premium cheese</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          interdum nunc. Aenean nunc diam, iaculis at leo vel, venenatis
          hendrerit diam. Proin porttitor eget tortor eget vulputate.
          Suspendisse mattis nisi non dui sollicitudin vulputate. Phasellus
          vestibulum vehicula pellentesque. Integer non augue scelerisque,
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
