import Container from "../container";

type Props = {
    children?: React.ReactNode;
  };
  
// riaan open scroller
const RiaanOpen = ({ children }: Props) => {
    return (
        <Container>
            <div className="container mx-auto px-5">
                {children}bepsdf
            </div>
        </Container>
    );
};

export default RiaanOpen;
  