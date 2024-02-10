import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pizza}>
        <div className="w-[0.5vw] h-[100%] bg-[#fab940]"></div>
        <div className={styles.image}></div>
        <h1>ABOUT US</h1>
      </div>
      <main className={styles.main}>
        <section>
          <h1>WE USE FRESH INGREDIENTS. WHY IS THAT?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            reiciendis consequuntur repellat dolor sed a cum repudiandae tempore
            inventore ipsa perferendis dignissimos, pariatur iusto omnis
            laudantium aspernatur vero consequatur id? Iste voluptatum deserunt
            corporis cum dolorum excepturi debitis voluptate quibusdam.
            Similique adipisci quae doloremque cumque saepe, a numquam sed
            officiis! Tenetur eaque reiciendis quos voluptatibus? Neque amet
            ducimus quibusdam consequuntur! Unde deleniti explicabo sapiente.
            Saepe harum dicta pariatur? Provident ut esse blanditiis consequatur
            libero harum fugit adipisci totam iste illo eaque expedita ipsa
            dolore a quod, ea numquam veritatis porro. Hic voluptatum
            consequuntur harum non sequi sit suscipit laborum esse doloremque.
            Quis maiores cum, repellendus tenetur nemo nostrum aliquid vel ipsum
            quod delectus eligendi quasi vero facilis? Tempora, ducimus commodi?
            Magnam provident beatae facilis minima officia vitae unde rem, sequi
            eveniet velit maxime quam aut, deserunt dolor! Asperiores laudantium
            ab corporis dolores ad ipsa magnam tempore. Inventore officiis ipsum
            beatae. Sequi earum tenetur illum iusto iste, ab ea molestiae
            reprehenderit a. Dicta, error maiores. Necessitatibus dolorum
            deleniti, ratione itaque saepe laboriosam quod mollitia corrupti
            fuga, in dolores rerum architecto voluptatem?
          </p>
          <Image
            src="/Media/ingredient.webp"
            width={400}
            height={400}
            alt="Image"
            className={styles.imaage}
          ></Image>
        </section>
        <section>
          <h1>OUR TEAM</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            aliquam eveniet nihil porro ea ab sed ut alias a, accusamus
            excepturi repellat cupiditate exercitationem! Reiciendis, optio! Aut
            alias adipisci repellat? Quas veritatis voluptatibus, tenetur
            exercitationem quidem similique facere at reprehenderit, saepe
            consectetur ea quia beatae voluptatem illum veniam repellendus
            tempora error? Repellat delectus neque quos! In nesciunt libero
            minus animi. Animi maxime minima exercitationem nostrum corporis sit
            facere impedit nemo fuga ducimus, eveniet perferendis, nesciunt,
            cumque delectus quasi quae? Consectetur est corporis beatae nulla
            perspiciatis ex et, nisi quia debitis. Quae nobis nam eligendi
            corrupti! Mollitia non corporis impedit dolore odit ut, facilis cum.
            Distinctio facere similique nam alias laborum, iusto perferendis
            consequuntur quasi sint, aliquam mollitia aperiam accusantium odit.
            Laborum nulla assumenda hic consequatur officiis, totam consequuntur
            quos dicta, soluta et eaque molestias exercitationem nostrum sit
            alias excepturi atque id numquam. Atque harum ad esse similique
            cumque eaque iure? Exercitationem eum molestias magni dolore,
            dolores mollitia ea veritatis illo ad, beatae rerum inventore
            debitis reprehenderit. Beatae rem ipsa, inventore commodi omnis
            aliquid libero expedita molestias nemo quisquam impedit neque?
          </p>
          <Image
            src="/Media/team.webp"
            width={350}
            height={350}
            alt="Image"
            className={styles.imaage}
          ></Image>
        </section>
      </main>
    </div>
  );
};

export default page;
