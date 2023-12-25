import Card from "./components/Card";
import Input from "./components/Input";
import Typography from "./components/Typography";

const ProductContainer = () => {
  return (
    <Card>
      <Card>
        <Typography>{"Identity"}</Typography>
        <Input type="text" variant="single" />
      </Card>
    </Card>
  );
};

export default ProductContainer;
