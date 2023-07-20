import styled from "styled-components";
import Container from "../../ui/Container";
import ProgressBar from "../../ui/ProgressBar";
import Button from "../../ui/Button";

const H1 = styled.h1`
  font-size: 3.4rem;
  font-weight: 500;
  color: #333333;
  text-align: center;
  width: 70%;
  margin: 3rem auto;
`;

const SummaryWrapper = styled.div`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
`;

const Image = styled.img`
  height: 60rem;
  object-fit: cover;
`;

const SummaryDescription = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  margin-bottom: 3rem;
`;

const PledgeAmount = styled.span`
  display: block;
  color: #333333;
  font-size: 6rem;
`;

const TotalAmount = styled.span`
  display: block;
  font-size: 1.6rem;
  color: #4d4d4d;
`;

const P = styled.span`
  margin-bottom: 3rem;
  font-size: 1.6rem;
  color: #4d4d4d;
`;

const CampaignContent = styled.div`
  font-size: 2.2rem;
  color: #333333;
  padding: 2rem 4rem;
`;

function SingleCampaign() {
  return (
    <Container>
      <H1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        provident, optio labore sint ducimus.
      </H1>
      <SummaryWrapper>
        <Image src="https://picsum.photos/600" alt="random image" />
        <SummaryDescription>
          <PledgeAmount>$478</PledgeAmount>
          <TotalAmount>funded of $20,000 USD</TotalAmount>
          <ProgressBar percentage={40} />
          <P>
            {" "}
            <strong>25</strong> supporters, <strong>165</strong> days left
          </P>
          <Button>Support</Button>
        </SummaryDescription>
      </SummaryWrapper>
      <CampaignContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est at iste,
          voluptatibus quo dolore explicabo voluptates similique modi delectus
          in labore, nostrum commodi sequi maxime quibusdam earum quisquam omnis
          ea id autem facilis molestias provident. Praesentium eum quod quia
          eius saepe nesciunt magni earum exercitationem optio ex, odit quos
          error velit veniam explicabo possimus illo officia. Maxime expedita
          perferendis assumenda sapiente in iure magnam fugiat consectetur,
          nulla dicta vel, ex accusantium necessitatibus quod voluptas. Veniam
          incidunt praesentium quae quidem expedita, repellat quisquam corrupti
          assumenda consectetur rerum, explicabo excepturi nam omnis veritatis
          ducimus similique natus repellendus minima ad porro doloremque! Minus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
          sapiente perspiciatis adipisci? Id, eum perferendis, nemo odit
          reiciendis ducimus laudantium neque minus, temporibus dolores
          reprehenderit quae tempore nulla quam. Tempora molestiae doloribus
          dolor odit? Quo repellat quod culpa quam sapiente excepturi doloremque
          nam blanditiis ipsum eveniet officiis saepe totam rem consequuntur
          quae, cum at nisi quidem deserunt voluptatum quas maiores. Dicta
          voluptas qui eaque in vel corporis dolores ea corrupti ullam?
          Accusantium rem modi est magnam pariatur harum molestias esse corporis
          perspiciatis ex veritatis velit officiis unde laboriosam ipsum
          deleniti nemo vel quidem alias dolorem, numquam necessitatibus! Nihil,
          cupiditate?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
          sapiente perspiciatis adipisci? Id, eum perferendis, nemo odit
          reiciendis ducimus laudantium neque minus, temporibus dolores
          reprehenderit quae tempore nulla quam. Tempora molestiae doloribus
          dolor odit? Quo repellat quod culpa quam sapiente excepturi doloremque
          nam blanditiis ipsum eveniet officiis saepe totam rem consequuntur
          quae, cum at nisi quidem deserunt voluptatum quas maiores. Dicta
          voluptas qui eaque in vel corporis dolores ea corrupti ullam?
          Accusantium rem modi est magnam pariatur harum molestias esse corporis
          perspiciatis ex veritatis velit officiis unde laboriosam ipsum
          deleniti nemo vel quidem alias dolorem, numquam necessitatibus! Nihil,
          cupiditate?
        </p>
      </CampaignContent>
    </Container>
  );
}

export default SingleCampaign;
