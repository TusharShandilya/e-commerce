import { Heading, Paragraph } from "../../common";

export const tabData = (description) => [
  {
    label: "Description",
    content: <Paragraph>{description}</Paragraph>,
  },
  {
    label: "Shipping",
    content: (
      <>
        <Heading size="4">Do you ship internationally?</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          harum veritatis exercitationem vitae impedit fugiat sed facilis autem
          modi perspiciatis beatae ab expedita quis consequuntur, quisquam quod
          quo ducimus dicta laborum saepe velit aliquam ipsam! Voluptatum
          blanditiis similique ipsa. Tenetur repudiandae repellat officiis
          molestias sint aliquam? Deserunt dignissimos nihil consequatur!
        </Paragraph>
        <Heading size="4">How do I return a product?</Heading>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nemo
          ratione atque, nostrum doloribus sit cupiditate dolore tempore ullam
          est laudantium optio qui, quo illo minima error consequuntur. Incidunt
          natus magni quod quibusdam cumque? Fuga sequi, quidem maiores, nostrum
          illo omnis quam sunt dicta assumenda exercitationem necessitatibus
          itaque in culpa, expedita magni! Architecto consectetur ut sunt
          voluptatibus praesentium provident nulla, natus soluta blanditiis
          reprehenderit molestiae, maxime sit dolorum iusto, vitae quos dicta
          dolore repellendus impedit officiis quae facere sint? Nostrum.
        </Paragraph>
      </>
    ),
  },
];
