const styles = {
  about: `my-8`,
  cards: `md: max-w-[400px] md:mx-auto`,
};

const AboutUs = () => {
  return (
    <div className=" grid place-content-center bg-[#EF5A6F] text-[#D4BDAC] text-xl md:text-2xl text-center pb-8 space-y-12 md:space-y-0 my-12 md:flex">
      <div className={styles.cards}>
        <div className={styles.about}>About us</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          interdum nunc. Aenean nunc diam, iaculis at leo vel, venenatis
          hendrerit diam. Proin porttitor eget tortor eget vulputate.
          Suspendisse mattis nisi non dui sollicitudin vulputate. Phasellus
          vestibulum vehicula pellentesque. Integer non augue scelerisque,
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.about}>About us</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          interdum nunc. Aenean nunc diam, iaculis at leo vel, venenatis
          hendrerit diam. Proin porttitor eget tortor eget vulputate.
          Suspendisse mattis nisi non dui sollicitudin vulputate. Phasellus
          vestibulum vehicula pellentesque. Integer non augue scelerisque,
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.about}>About us</div>
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
