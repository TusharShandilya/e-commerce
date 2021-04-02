import { BrowserRouter as Router } from "react-router-dom";
import { Button, Heading, Paragraph } from "./common";

export const App = () => {
  return (
    <Router>
      <Heading size="1">App</Heading>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        libero unde repellat harum corrupti corporis.
      </Paragraph>
      <div>
        <Button isLoading>Button</Button>
        <Button isLoading variant="outlined">
          Button
        </Button>
        <Button isLoading variant="underlined">
          Button
        </Button>
      </div>
      <div>
        <Button disabled>Button</Button>
        <Button disabled variant="outlined">
          Button
        </Button>
        <Button disabled variant="underlined">
          Button
        </Button>
      </div>
      <div>
        <Button>Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="underlined">Button</Button>
      </div>
    </Router>
  );
};
