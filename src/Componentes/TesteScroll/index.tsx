import { useEffect } from "react";
import "./styles.scss";

export default function TesteScroll() {
  function handleScroll() {
    const animatinClass = "animate";
    const allSubMenus: NodeListOf<Element> =
      document.querySelectorAll("[data-anima]");
    const windowTop = window.pageYOffset + window.innerHeight * 0.75;
    for (const sub of allSubMenus as any) {
      if (windowTop > sub.offsetTop) {
        sub.classList.add(animatinClass);
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div data-anima="top" className="flex justify-center mb-10 mx-4">
        <div className="bg-red-500 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis sequi illo. Totam ad vitae accusamus ut, obcaecati sit,
            vel quis molestiae at ex aliquam molestias eaque accusantium dolorum
            possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur laudantium quis soluta ipsa sunt! Deleniti iure
            voluptate praesentium minus recusandae maiores dicta vel facilis
            nesciunt est, dolorum illo modi. Laboriosam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Officiis vero architecto aliquid
            modi omnis quo, consectetur tempora veniam id asperiores ullam nisi,
            laudantium facere cumque. Natus eos quod temporibus officiis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            accusamus laudantium nisi illo. Hic, excepturi, expedita quasi
            suscipit repudiandae nulla modi ipsam nihil beatae recusandae quas
            odit quam vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Esse obcaecati laborum quas nisi expedita alias iusto
            voluptatem numquam exercitationem sequi nesciunt dolor corporis aut
            unde, vel ipsum autem nam error! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore nulla sequi, quae cupiditate
            necessitatibus maiores excepturi dolor non nam vero corrupti
            mollitia saepe eaque sed! Voluptatibus sequi ipsa officiis eveniet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            mollitia error natus saepe laborum unde sint non explicabo ex,
            sapiente quas pariatur id ipsam! Reprehenderit natus recusandae eum
            incidunt sint! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde quibusdam cupiditate reiciendis omnis architecto. Facere
            corrupti magni deserunt veritatis vero numquam nemo illum atque quam
            aliquid hic laborum, et officia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic distinctio ratione asperiores
            deleniti quod explicabo quia labore, tempore exercitationem
            doloribus maiores omnis, suscipit dolorem molestiae magnam illo
            nostrum repellat nobis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore nostrum, culpa nisi laudantium molestiae
            corporis consequatur aut! Animi, aut magnam adipisci quos saepe
            minima odio dolor eos dolorum, eligendi minus!
          </p>
        </div>
      </div>

      <div data-anima="left" className="flex justify-center mb-10 mx-4">
        <div className="bg-red-500 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis sequi illo. Totam ad vitae accusamus ut, obcaecati sit,
            vel quis molestiae at ex aliquam molestias eaque accusantium dolorum
            possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur laudantium quis soluta ipsa sunt! Deleniti iure
            voluptate praesentium minus recusandae maiores dicta vel facilis
            nesciunt est, dolorum illo modi. Laboriosam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Officiis vero architecto aliquid
            modi omnis quo, consectetur tempora veniam id asperiores ullam nisi,
            laudantium facere cumque. Natus eos quod temporibus officiis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            accusamus laudantium nisi illo. Hic, excepturi, expedita quasi
            suscipit repudiandae nulla modi ipsam nihil beatae recusandae quas
            odit quam vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Esse obcaecati laborum quas nisi expedita alias iusto
            voluptatem numquam exercitationem sequi nesciunt dolor corporis aut
            unde, vel ipsum autem nam error! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore nulla sequi, quae cupiditate
            necessitatibus maiores excepturi dolor non nam vero corrupti
            mollitia saepe eaque sed! Voluptatibus sequi ipsa officiis eveniet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            mollitia error natus saepe laborum unde sint non explicabo ex,
            sapiente quas pariatur id ipsam! Reprehenderit natus recusandae eum
            incidunt sint! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde quibusdam cupiditate reiciendis omnis architecto. Facere
            corrupti magni deserunt veritatis vero numquam nemo illum atque quam
            aliquid hic laborum, et officia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic distinctio ratione asperiores
            deleniti quod explicabo quia labore, tempore exercitationem
            doloribus maiores omnis, suscipit dolorem molestiae magnam illo
            nostrum repellat nobis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore nostrum, culpa nisi laudantium molestiae
            corporis consequatur aut! Animi, aut magnam adipisci quos saepe
            minima odio dolor eos dolorum, eligendi minus!
          </p>
        </div>
      </div>

      <div data-anima="top" className="flex justify-center mb-10 mx-4">
        <div className="bg-red-500 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis sequi illo. Totam ad vitae accusamus ut, obcaecati sit,
            vel quis molestiae at ex aliquam molestias eaque accusantium dolorum
            possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur laudantium quis soluta ipsa sunt! Deleniti iure
            voluptate praesentium minus recusandae maiores dicta vel facilis
            nesciunt est, dolorum illo modi. Laboriosam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Officiis vero architecto aliquid
            modi omnis quo, consectetur tempora veniam id asperiores ullam nisi,
            laudantium facere cumque. Natus eos quod temporibus officiis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            accusamus laudantium nisi illo. Hic, excepturi, expedita quasi
            suscipit repudiandae nulla modi ipsam nihil beatae recusandae quas
            odit quam vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Esse obcaecati laborum quas nisi expedita alias iusto
            voluptatem numquam exercitationem sequi nesciunt dolor corporis aut
            unde, vel ipsum autem nam error! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore nulla sequi, quae cupiditate
            necessitatibus maiores excepturi dolor non nam vero corrupti
            mollitia saepe eaque sed! Voluptatibus sequi ipsa officiis eveniet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            mollitia error natus saepe laborum unde sint non explicabo ex,
            sapiente quas pariatur id ipsam! Reprehenderit natus recusandae eum
            incidunt sint! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde quibusdam cupiditate reiciendis omnis architecto. Facere
            corrupti magni deserunt veritatis vero numquam nemo illum atque quam
            aliquid hic laborum, et officia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic distinctio ratione asperiores
            deleniti quod explicabo quia labore, tempore exercitationem
            doloribus maiores omnis, suscipit dolorem molestiae magnam illo
            nostrum repellat nobis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore nostrum, culpa nisi laudantium molestiae
            corporis consequatur aut! Animi, aut magnam adipisci quos saepe
            minima odio dolor eos dolorum, eligendi minus!
          </p>
        </div>
      </div>

      <div data-anima="bottom" className="flex justify-center mb-10 mx-4">
        <div className="bg-red-500 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis sequi illo. Totam ad vitae accusamus ut, obcaecati sit,
            vel quis molestiae at ex aliquam molestias eaque accusantium dolorum
            possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur laudantium quis soluta ipsa sunt! Deleniti iure
            voluptate praesentium minus recusandae maiores dicta vel facilis
            nesciunt est, dolorum illo modi. Laboriosam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Officiis vero architecto aliquid
            modi omnis quo, consectetur tempora veniam id asperiores ullam nisi,
            laudantium facere cumque. Natus eos quod temporibus officiis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            accusamus laudantium nisi illo. Hic, excepturi, expedita quasi
            suscipit repudiandae nulla modi ipsam nihil beatae recusandae quas
            odit quam vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Esse obcaecati laborum quas nisi expedita alias iusto
            voluptatem numquam exercitationem sequi nesciunt dolor corporis aut
            unde, vel ipsum autem nam error! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore nulla sequi, quae cupiditate
            necessitatibus maiores excepturi dolor non nam vero corrupti
            mollitia saepe eaque sed! Voluptatibus sequi ipsa officiis eveniet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            mollitia error natus saepe laborum unde sint non explicabo ex,
            sapiente quas pariatur id ipsam! Reprehenderit natus recusandae eum
            incidunt sint! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde quibusdam cupiditate reiciendis omnis architecto. Facere
            corrupti magni deserunt veritatis vero numquam nemo illum atque quam
            aliquid hic laborum, et officia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic distinctio ratione asperiores
            deleniti quod explicabo quia labore, tempore exercitationem
            doloribus maiores omnis, suscipit dolorem molestiae magnam illo
            nostrum repellat nobis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore nostrum, culpa nisi laudantium molestiae
            corporis consequatur aut! Animi, aut magnam adipisci quos saepe
            minima odio dolor eos dolorum, eligendi minus!
          </p>
        </div>
      </div>

      <div data-anima="left" className="flex justify-center mb-10 mx-4">
        <div className="bg-red-500 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis sequi illo. Totam ad vitae accusamus ut, obcaecati sit,
            vel quis molestiae at ex aliquam molestias eaque accusantium dolorum
            possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur laudantium quis soluta ipsa sunt! Deleniti iure
            voluptate praesentium minus recusandae maiores dicta vel facilis
            nesciunt est, dolorum illo modi. Laboriosam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Officiis vero architecto aliquid
            modi omnis quo, consectetur tempora veniam id asperiores ullam nisi,
            laudantium facere cumque. Natus eos quod temporibus officiis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            accusamus laudantium nisi illo. Hic, excepturi, expedita quasi
            suscipit repudiandae nulla modi ipsam nihil beatae recusandae quas
            odit quam vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Esse obcaecati laborum quas nisi expedita alias iusto
            voluptatem numquam exercitationem sequi nesciunt dolor corporis aut
            unde, vel ipsum autem nam error! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore nulla sequi, quae cupiditate
            necessitatibus maiores excepturi dolor non nam vero corrupti
            mollitia saepe eaque sed! Voluptatibus sequi ipsa officiis eveniet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            mollitia error natus saepe laborum unde sint non explicabo ex,
            sapiente quas pariatur id ipsam! Reprehenderit natus recusandae eum
            incidunt sint! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde quibusdam cupiditate reiciendis omnis architecto. Facere
            corrupti magni deserunt veritatis vero numquam nemo illum atque quam
            aliquid hic laborum, et officia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic distinctio ratione asperiores
            deleniti quod explicabo quia labore, tempore exercitationem
            doloribus maiores omnis, suscipit dolorem molestiae magnam illo
            nostrum repellat nobis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore nostrum, culpa nisi laudantium molestiae
            corporis consequatur aut! Animi, aut magnam adipisci quos saepe
            minima odio dolor eos dolorum, eligendi minus!
          </p>
        </div>
      </div>

      <div data-anima="top" className="flex justify-center mb-10 mx-4">
        <div className="bg-red-500 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis sequi illo. Totam ad vitae accusamus ut, obcaecati sit,
            vel quis molestiae at ex aliquam molestias eaque accusantium dolorum
            possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur laudantium quis soluta ipsa sunt! Deleniti iure
            voluptate praesentium minus recusandae maiores dicta vel facilis
            nesciunt est, dolorum illo modi. Laboriosam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Officiis vero architecto aliquid
            modi omnis quo, consectetur tempora veniam id asperiores ullam nisi,
            laudantium facere cumque. Natus eos quod temporibus officiis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            accusamus laudantium nisi illo. Hic, excepturi, expedita quasi
            suscipit repudiandae nulla modi ipsam nihil beatae recusandae quas
            odit quam vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Esse obcaecati laborum quas nisi expedita alias iusto
            voluptatem numquam exercitationem sequi nesciunt dolor corporis aut
            unde, vel ipsum autem nam error! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore nulla sequi, quae cupiditate
            necessitatibus maiores excepturi dolor non nam vero corrupti
            mollitia saepe eaque sed! Voluptatibus sequi ipsa officiis eveniet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            mollitia error natus saepe laborum unde sint non explicabo ex,
            sapiente quas pariatur id ipsam! Reprehenderit natus recusandae eum
            incidunt sint! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde quibusdam cupiditate reiciendis omnis architecto. Facere
            corrupti magni deserunt veritatis vero numquam nemo illum atque quam
            aliquid hic laborum, et officia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic distinctio ratione asperiores
            deleniti quod explicabo quia labore, tempore exercitationem
            doloribus maiores omnis, suscipit dolorem molestiae magnam illo
            nostrum repellat nobis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore nostrum, culpa nisi laudantium molestiae
            corporis consequatur aut! Animi, aut magnam adipisci quos saepe
            minima odio dolor eos dolorum, eligendi minus!
          </p>
        </div>
      </div>

      <div data-anima="bottom" className="flex justify-center mx-4">
        <div className="bg-red-500 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis sequi illo. Totam ad vitae accusamus ut, obcaecati sit,
            vel quis molestiae at ex aliquam molestias eaque accusantium dolorum
            possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur laudantium quis soluta ipsa sunt! Deleniti iure
            voluptate praesentium minus recusandae maiores dicta vel facilis
            nesciunt est, dolorum illo modi. Laboriosam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Officiis vero architecto aliquid
            modi omnis quo, consectetur tempora veniam id asperiores ullam nisi,
            laudantium facere cumque. Natus eos quod temporibus officiis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            accusamus laudantium nisi illo. Hic, excepturi, expedita quasi
            suscipit repudiandae nulla modi ipsam nihil beatae recusandae quas
            odit quam vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Esse obcaecati laborum quas nisi expedita alias iusto
            voluptatem numquam exercitationem sequi nesciunt dolor corporis aut
            unde, vel ipsum autem nam error! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore nulla sequi, quae cupiditate
            necessitatibus maiores excepturi dolor non nam vero corrupti
            mollitia saepe eaque sed! Voluptatibus sequi ipsa officiis eveniet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            mollitia error natus saepe laborum unde sint non explicabo ex,
            sapiente quas pariatur id ipsam! Reprehenderit natus recusandae eum
            incidunt sint! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde quibusdam cupiditate reiciendis omnis architecto. Facere
            corrupti magni deserunt veritatis vero numquam nemo illum atque quam
            aliquid hic laborum, et officia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic distinctio ratione asperiores
            deleniti quod explicabo quia labore, tempore exercitationem
            doloribus maiores omnis, suscipit dolorem molestiae magnam illo
            nostrum repellat nobis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore nostrum, culpa nisi laudantium molestiae
            corporis consequatur aut! Animi, aut magnam adipisci quos saepe
            minima odio dolor eos dolorum, eligendi minus!
          </p>
        </div>
      </div>
    </div>
  );
}
